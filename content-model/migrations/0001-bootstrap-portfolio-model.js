/**
 * Greenfield portfolio model v0.1.
 *
 * Run only against a blank non-production environment.
 * Review docs/system/FIELD-ID-LEDGER.md before execution.
 */

module.exports = function bootstrapPortfolioModel(migration) {
  const slugValidation = [
    {
      regexp: {
        pattern: "^[a-z0-9]+(?:-[a-z0-9]+)*$",
        flags: null,
      },
      message: "Use lowercase letters, numbers, and hyphens only.",
    },
  ];

  const requiredSymbol = (contentType, id, name) =>
    contentType
      .createField(id)
      .name(name)
      .type("Symbol")
      .required(true);

  const optionalSymbol = (contentType, id, name) =>
    contentType
      .createField(id)
      .name(name)
      .type("Symbol")
      .required(false);

  const optionalText = (contentType, id, name) =>
    contentType
      .createField(id)
      .name(name)
      .type("Text")
      .required(false);

  const optionalBoolean = (contentType, id, name, defaultValue = false) =>
    contentType
      .createField(id)
      .name(name)
      .type("Boolean")
      .required(false)
      .defaultValue({ "en-US": defaultValue });

  const stringArray = (contentType, id, name) =>
    contentType
      .createField(id)
      .name(name)
      .type("Array")
      .items({ type: "Symbol", validations: [] })
      .required(false);

  const entryLink = (contentType, id, name, allowedTypes, required = false) =>
    contentType
      .createField(id)
      .name(name)
      .type("Link")
      .linkType("Entry")
      .validations([{ linkContentType: allowedTypes }])
      .required(required);

  const entryArray = (contentType, id, name, allowedTypes) =>
    contentType
      .createField(id)
      .name(name)
      .type("Array")
      .items({
        type: "Link",
        linkType: "Entry",
        validations: [{ linkContentType: allowedTypes }],
      })
      .required(false);

  const assetLink = (contentType, id, name) =>
    contentType
      .createField(id)
      .name(name)
      .type("Link")
      .linkType("Asset")
      .required(false);

  // 1. SEO Metadata
  const seoMetadata = migration
    .createContentType("seoMetadata")
    .name("SEO Metadata")
    .description("Reusable search and social metadata.")
    .displayField("internalName");

  requiredSymbol(seoMetadata, "internalName", "Internal Name");
  requiredSymbol(seoMetadata, "title", "Title")
    .validations([{ size: { max: 70 } }]);
  seoMetadata
    .createField("description")
    .name("Description")
    .type("Text")
    .required(true)
    .validations([{ size: { max: 170 } }]);
  optionalSymbol(seoMetadata, "canonicalUrl", "Canonical URL");
  assetLink(seoMetadata, "openGraphImage", "Open Graph Image");
  optionalBoolean(seoMetadata, "noIndex", "No Index", false);
  optionalBoolean(seoMetadata, "noFollow", "No Follow", false);

  // 2. Social Link
  const socialLink = migration
    .createContentType("socialLink")
    .name("Social Link")
    .description("A social or professional profile link.")
    .displayField("platform");

  requiredSymbol(socialLink, "platform", "Platform");
  requiredSymbol(socialLink, "label", "Accessible Label");
  requiredSymbol(socialLink, "url", "URL");
  optionalSymbol(socialLink, "iconKey", "Icon Key");
  socialLink
    .createField("order")
    .name("Order")
    .type("Integer")
    .required(false)
    .validations([{ range: { min: 0 } }]);
  optionalBoolean(socialLink, "isActive", "Is Active", true);

  // 3. Navigation Item
  const navigationItem = migration
    .createContentType("navigationItem")
    .name("Navigation Item")
    .description("A header or footer navigation destination.")
    .displayField("label");

  requiredSymbol(navigationItem, "label", "Label");
  requiredSymbol(navigationItem, "href", "Href");
  optionalSymbol(navigationItem, "description", "Description");
  navigationItem
    .createField("order")
    .name("Order")
    .type("Integer")
    .required(false)
    .validations([{ range: { min: 0 } }]);
  optionalBoolean(navigationItem, "openInNewTab", "Open in New Tab", false);
  optionalBoolean(navigationItem, "isActive", "Is Active", true);

  // 4. Site Settings
  const siteSettings = migration
    .createContentType("siteSettings")
    .name("Site Settings")
    .description("Single global website configuration entry.")
    .displayField("siteName");

  requiredSymbol(siteSettings, "siteName", "Site Name");
  optionalSymbol(siteSettings, "tagline", "Tagline");
  optionalText(siteSettings, "description", "Site Description");
  assetLink(siteSettings, "logo", "Logo");
  assetLink(siteSettings, "favicon", "Favicon");
  entryLink(siteSettings, "defaultSeo", "Default SEO", ["seoMetadata"]);
  entryArray(
    siteSettings,
    "navigationItems",
    "Primary Navigation Items",
    ["navigationItem"]
  );
  entryArray(
    siteSettings,
    "footerNavigationItems",
    "Footer Navigation Items",
    ["navigationItem"]
  );
  entryArray(siteSettings, "socialLinks", "Social Links", ["socialLink"]);

  // 5. Person Profile
  const personProfile = migration
    .createContentType("personProfile")
    .name("Person Profile")
    .description("Primary personal profile and positioning content.")
    .displayField("name");

  requiredSymbol(personProfile, "name", "Name");
  requiredSymbol(personProfile, "professionalTitle", "Professional Title");
  optionalSymbol(personProfile, "availabilityLabel", "Availability Label");
  optionalText(personProfile, "shortBio", "Short Bio");
  personProfile
    .createField("longBio")
    .name("Long Bio")
    .type("RichText")
    .required(false);
  optionalSymbol(personProfile, "location", "Location");
  optionalSymbol(personProfile, "email", "Public Contact Email");
  assetLink(personProfile, "heroImage", "Hero Image");
  entryArray(personProfile, "socialLinks", "Social Links", ["socialLink"]);
  optionalSymbol(personProfile, "resumeUrl", "Resume URL");

  // 6. Project
  const project = migration
    .createContentType("project")
    .name("Project")
    .description("Portfolio project or case study.")
    .displayField("title");

  requiredSymbol(project, "title", "Title");
  project
    .createField("slug")
    .name("Slug")
    .type("Symbol")
    .required(true)
    .validations(slugValidation);
  optionalSymbol(project, "eyebrow", "Eyebrow");
  project
    .createField("summary")
    .name("Summary")
    .type("Text")
    .required(true)
    .validations([{ size: { max: 300 } }]);
  project
    .createField("body")
    .name("Body")
    .type("RichText")
    .required(false);
  assetLink(project, "heroImage", "Hero Image");
  project
    .createField("gallery")
    .name("Gallery")
    .type("Array")
    .items({ type: "Link", linkType: "Asset", validations: [] })
    .required(false);
  optionalSymbol(project, "category", "Category");
  stringArray(project, "tags", "Tags");
  stringArray(project, "technologies", "Technologies");
  optionalSymbol(project, "liveUrl", "Live URL");
  optionalSymbol(project, "repositoryUrl", "Repository URL");
  entryLink(project, "seo", "SEO Metadata", ["seoMetadata"]);
  optionalBoolean(project, "featured", "Featured", false);
  project
    .createField("publishedDate")
    .name("Published Date")
    .type("Date")
    .required(false);
  project
    .createField("order")
    .name("Order")
    .type("Integer")
    .required(false)
    .validations([{ range: { min: 0 } }]);

  project.changeFieldControl("slug", "builtin", "slugEditor", {
    trackingFieldId: "title",
  });

  // 7. Article
  const article = migration
    .createContentType("article")
    .name("Article")
    .description("Writing, guide, or article.")
    .displayField("title");

  requiredSymbol(article, "title", "Title");
  article
    .createField("slug")
    .name("Slug")
    .type("Symbol")
    .required(true)
    .validations(slugValidation);
  article
    .createField("excerpt")
    .name("Excerpt")
    .type("Text")
    .required(true)
    .validations([{ size: { max: 300 } }]);
  article
    .createField("body")
    .name("Body")
    .type("RichText")
    .required(true);
  assetLink(article, "heroImage", "Hero Image");
  article
    .createField("publishedDate")
    .name("Published Date")
    .type("Date")
    .required(true);
  article
    .createField("updatedDate")
    .name("Updated Date")
    .type("Date")
    .required(false);
  optionalSymbol(article, "category", "Category");
  stringArray(article, "tags", "Tags");
  article
    .createField("readingTimeMinutes")
    .name("Reading Time Minutes")
    .type("Integer")
    .required(false)
    .validations([{ range: { min: 1 } }]);
  entryLink(article, "seo", "SEO Metadata", ["seoMetadata"]);
  entryArray(article, "relatedProjects", "Related Projects", ["project"]);
  optionalBoolean(article, "featured", "Featured", false);

  article.changeFieldControl("slug", "builtin", "slugEditor", {
    trackingFieldId: "title",
  });

  // 8. Experience Item
  const experienceItem = migration
    .createContentType("experienceItem")
    .name("Experience Item")
    .description("A role in the professional timeline.")
    .displayField("role");

  requiredSymbol(experienceItem, "role", "Role");
  requiredSymbol(experienceItem, "company", "Company");
  optionalSymbol(experienceItem, "companyUrl", "Company URL");
  optionalSymbol(experienceItem, "location", "Location");
  experienceItem
    .createField("startDate")
    .name("Start Date")
    .type("Date")
    .required(true);
  experienceItem
    .createField("endDate")
    .name("End Date")
    .type("Date")
    .required(false);
  optionalBoolean(experienceItem, "current", "Current Role", false);
  optionalText(experienceItem, "summary", "Summary");
  stringArray(experienceItem, "highlights", "Highlights");
  stringArray(experienceItem, "tags", "Tags");
  experienceItem
    .createField("order")
    .name("Order")
    .type("Integer")
    .required(false)
    .validations([{ range: { min: 0 } }]);

  // 9. Skill
  const skill = migration
    .createContentType("skill")
    .name("Skill")
    .description("An individual skill, capability, or technology.")
    .displayField("name");

  requiredSymbol(skill, "name", "Name");
  skill
    .createField("slug")
    .name("Slug")
    .type("Symbol")
    .required(true)
    .validations(slugValidation);
  optionalSymbol(skill, "category", "Category");
  optionalSymbol(skill, "iconKey", "Icon Key");
  skill
    .createField("proficiency")
    .name("Proficiency")
    .type("Integer")
    .required(false)
    .validations([{ range: { min: 1, max: 5 } }]);
  skill
    .createField("yearsExperience")
    .name("Years of Experience")
    .type("Number")
    .required(false)
    .validations([{ range: { min: 0 } }]);
  optionalBoolean(skill, "featured", "Featured", false);
  skill
    .createField("order")
    .name("Order")
    .type("Integer")
    .required(false)
    .validations([{ range: { min: 0 } }]);

  skill.changeFieldControl("slug", "builtin", "slugEditor", {
    trackingFieldId: "name",
  });

  // 10. Skill Group
  const skillGroup = migration
    .createContentType("skillGroup")
    .name("Skill Group")
    .description("A curated group of skills.")
    .displayField("name");

  requiredSymbol(skillGroup, "name", "Name");
  skillGroup
    .createField("slug")
    .name("Slug")
    .type("Symbol")
    .required(true)
    .validations(slugValidation);
  optionalText(skillGroup, "description", "Description");
  entryArray(skillGroup, "skills", "Skills", ["skill"]);
  skillGroup
    .createField("order")
    .name("Order")
    .type("Integer")
    .required(false)
    .validations([{ range: { min: 0 } }]);

  skillGroup.changeFieldControl("slug", "builtin", "slugEditor", {
    trackingFieldId: "name",
  });
};
