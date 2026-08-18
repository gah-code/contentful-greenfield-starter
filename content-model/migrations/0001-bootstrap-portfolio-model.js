/**
 * Greenfield portfolio model v1.
 *
 * Implements the approved Phase 02 model contract.
 * Run only against a verified blank dev environment after external approval.
 */

module.exports = function bootstrapPortfolioModel(migration) {
  const ROUTE_KEYS = [
    "home",
    "about",
    "work",
    "projects",
    "writing",
    "tools",
    "contact",
  ];

  const PROJECT_TYPES = [
    "case-study",
    "cms-architecture",
    "content-modeling",
    "migration-replatforming",
    "frontend-integration",
    "content-operations",
    "workflow-automation",
  ];

  const PROJECT_STATUSES = ["completed", "ongoing", "in-progress", "archived"];

  const ARTICLE_PILLARS = [
    "cms-architecture",
    "frontend-implementation",
    "content-operations",
    "migration-strategy",
    "seo-accessibility-content-quality",
    "ai-assisted-workflows",
  ];

  const ARTICLE_CATEGORIES = [
    "technical-guide",
    "field-note",
    "strategy-note",
    "case-study-note",
    "reflection",
  ];

  const EMPLOYMENT_TYPES = [
    "full-time",
    "contract",
    "consulting",
    "freelance",
    "part-time",
    "internship",
    "volunteer",
  ];

  const TOOL_CATEGORIES = [
    "cms-platform",
    "frontend-framework",
    "language-runtime",
    "design-qa",
    "seo-analytics",
    "deployment-devops",
    "collaboration-workflow",
    "automation-ai",
  ];

  const SOCIAL_PLATFORMS = [
    "linkedin",
    "github",
    "personal-site",
    "figma",
    "medium",
    "devto",
    "substack",
    "x",
    "bluesky",
    "mastodon",
    "other",
  ];

  const slugValidation = [
    {
      regexp: {
        pattern: "^[a-z0-9]+(?:-[a-z0-9]+)*$",
        flags: null,
      },
      message: "Use a lowercase route segment with hyphen-separated words.",
    },
    {
      unique: true,
      message: "Slug must be unique for this content type.",
    },
  ];

  const publicUrlValidation = [
    {
      regexp: {
        pattern:
          "^https:\\/\\/(?!localhost(?:[:\\/]|$))(?!127\\.)(?!10\\.)(?!192\\.168\\.)(?!172\\.(?:1[6-9]|2[0-9]|3[0-1])\\.)(?!169\\.254\\.)(?:[A-Za-z0-9-]+\\.)+[A-Za-z]{2,}(?::[0-9]+)?(?:\\/[^\\s]*)?$",
        flags: null,
      },
      message: "Use an absolute public https URL.",
    },
  ];

  const emailValidation = [
    {
      regexp: {
        pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
        flags: null,
      },
      message: "Use a valid public email address.",
    },
  ];

  const sizeMax = (max) => [{ size: { max } }];
  const rangeMin = (min) => [{ range: { min } }];
  const inValues = (values) => [{ in: values }];
  const requiredArray = [{ size: { min: 1 } }];

  const titleValidations = sizeMax(120);
  const navigationLabelValidations = sizeMax(40);
  const shortTextValidations = sizeMax(300);
  const longTextValidations = sizeMax(1200);
  const seoTitleValidations = sizeMax(90);
  const seoDescriptionValidations = sizeMax(220);

  const richTextStandard = [
    {
      enabledNodeTypes: [
        "heading-2",
        "heading-3",
        "unordered-list",
        "ordered-list",
        "blockquote",
        "hyperlink",
      ],
      message: "Use approved rich text nodes only.",
    },
  ];

  const richTextWithCodeAndAssets = [
    {
      enabledMarks: ["bold", "italic", "code"],
      message: "Use approved rich text marks only.",
    },
    {
      enabledNodeTypes: [
        "heading-2",
        "heading-3",
        "unordered-list",
        "ordered-list",
        "blockquote",
        "hyperlink",
        "embedded-asset-block",
      ],
      message: "Use approved rich text nodes only.",
    },
  ];

  const simpleRichText = [
    {
      enabledNodeTypes: [
        "unordered-list",
        "ordered-list",
        "hyperlink",
      ],
      message: "Use approved rich text nodes only.",
    },
  ];

  const field = (contentType, id, name, type, options = {}) => {
    const { required = false, validations = [] } = options;
    const createdField = contentType
      .createField(id)
      .name(name)
      .type(type)
      .localized(false)
      .required(required);

    if (validations.length > 0) {
      createdField.validations(validations);
    }

    return createdField;
  };

  const symbol = (contentType, id, name, options) =>
    field(contentType, id, name, "Symbol", options);

  const text = (contentType, id, name, options) =>
    field(contentType, id, name, "Text", options);

  const richText = (contentType, id, name, options) =>
    field(contentType, id, name, "RichText", options);

  const date = (contentType, id, name, options) =>
    field(contentType, id, name, "Date", options);

  const boolean = (contentType, id, name, options) =>
    field(contentType, id, name, "Boolean", options);

  const integer = (contentType, id, name, options) =>
    field(contentType, id, name, "Integer", options);

  const asset = (contentType, id, name, options = {}) => {
    const { required = false, mimetypeGroup, validations = [] } = options;
    const allValidations = [...validations];

    if (mimetypeGroup) {
      allValidations.push({ linkMimetypeGroup: [mimetypeGroup] });
    }

    const createdField = contentType
      .createField(id)
      .name(name)
      .type("Link")
      .linkType("Asset")
      .localized(false)
      .required(required);

    if (allValidations.length > 0) {
      createdField.validations(allValidations);
    }

    return createdField;
  };

  const assetArray = (contentType, id, name, options = {}) => {
    const { required = false, mimetypeGroup, validations = [] } = options;
    const itemValidations = mimetypeGroup
      ? [{ linkMimetypeGroup: [mimetypeGroup] }]
      : [];

    const createdField = contentType
      .createField(id)
      .name(name)
      .type("Array")
      .items({
        type: "Link",
        linkType: "Asset",
        validations: itemValidations,
      })
      .localized(false)
      .required(required);

    if (validations.length > 0) {
      createdField.validations(validations);
    }

    return createdField;
  };

  const symbolArray = (contentType, id, name, options = {}) => {
    const { required = false, validations = [] } = options;
    const createdField = contentType
      .createField(id)
      .name(name)
      .type("Array")
      .items({
        type: "Symbol",
        validations: [{ size: { max: 40 } }],
      })
      .localized(false)
      .required(required);

    if (validations.length > 0) {
      createdField.validations(validations);
    }

    return createdField;
  };

  const entryLink = (contentType, id, name, targetType, options = {}) => {
    const { required = false, validations = [] } = options;

    return contentType
      .createField(id)
      .name(name)
      .type("Link")
      .linkType("Entry")
      .localized(false)
      .required(required)
      .validations([{ linkContentType: [targetType] }, ...validations]);
  };

  const entryArray = (contentType, id, name, targetType, options = {}) => {
    const { required = false, validations = [] } = options;
    const createdField = contentType
      .createField(id)
      .name(name)
      .type("Array")
      .items({
        type: "Link",
        linkType: "Entry",
        validations: [{ linkContentType: [targetType] }],
      })
      .localized(false)
      .required(required);

    if (validations.length > 0) {
      createdField.validations(validations);
    }

    return createdField;
  };

  const siteSettings = migration
    .createContentType("siteSettings")
    .name("Site Settings")
    .description("Global editorial site identity, navigation, and global links.")
    .displayField("siteName");

  symbol(siteSettings, "siteName", "Site Name", {
    required: true,
    validations: titleValidations,
  });
  text(siteSettings, "siteDescription", "Site Description", {
    validations: shortTextValidations,
  });
  entryArray(
    siteSettings,
    "primaryNavigationItems",
    "Primary Navigation Items",
    "navigationItem",
    {
      required: true,
      validations: requiredArray,
    }
  );
  entryArray(
    siteSettings,
    "footerNavigationItems",
    "Footer Navigation Items",
    "navigationItem"
  );
  entryArray(siteSettings, "socialLinks", "Social Links", "socialLink");

  const personProfile = migration
    .createContentType("personProfile")
    .name("Person Profile")
    .description(
      "Canonical professional identity, bio, contact, resume, and author context."
    )
    .displayField("name");

  symbol(personProfile, "name", "Name", {
    required: true,
    validations: titleValidations,
  });
  symbol(personProfile, "primaryTitle", "Primary Title", {
    required: true,
    validations: titleValidations,
  });
  symbol(personProfile, "secondaryTitle", "Secondary Title", {
    validations: titleValidations,
  });
  text(personProfile, "positioningStatement", "Positioning Statement", {
    required: true,
    validations: longTextValidations,
  });
  text(personProfile, "shortBio", "Short Bio", {
    required: true,
    validations: shortTextValidations,
  });
  richText(personProfile, "longBio", "Long Bio", {
    required: true,
    validations: richTextStandard,
  });
  asset(personProfile, "profileImage", "Profile Image", {
    required: true,
    mimetypeGroup: "image",
  });
  symbol(personProfile, "publicEmail", "Public Email", {
    validations: emailValidation,
  });
  symbol(personProfile, "location", "Location", {
    validations: titleValidations,
  });
  symbol(personProfile, "availabilityStatus", "Availability Status", {
    validations: titleValidations,
  });
  text(personProfile, "workPreference", "Work Preference", {
    validations: longTextValidations,
  });
  text(personProfile, "contactIntro", "Contact Intro", {
    validations: longTextValidations,
  });
  asset(personProfile, "resume", "Resume", {
    mimetypeGroup: "pdfdocument",
  });
  richText(personProfile, "learningHighlights", "Learning Highlights", {
    validations: simpleRichText,
  });
  entryArray(personProfile, "socialLinks", "Social Links", "socialLink");

  const socialLink = migration
    .createContentType("socialLink")
    .name("Social Link")
    .description("Reusable public professional or social destination.")
    .displayField("label");

  symbol(socialLink, "platform", "Platform", {
    required: true,
    validations: inValues(SOCIAL_PLATFORMS),
  });
  symbol(socialLink, "label", "Label", {
    required: true,
    validations: titleValidations,
  });
  symbol(socialLink, "url", "URL", {
    required: true,
    validations: publicUrlValidation,
  });
  integer(socialLink, "sortOrder", "Sort Order", {
    validations: rangeMin(0),
  });

  const navigationItem = migration
    .createContentType("navigationItem")
    .name("Navigation Item")
    .description("Label and route key for approved v1 navigation.")
    .displayField("label");

  symbol(navigationItem, "label", "Label", {
    required: true,
    validations: navigationLabelValidations,
  });
  symbol(navigationItem, "routeKey", "Route Key", {
    required: true,
    validations: inValues(ROUTE_KEYS),
  });
  text(navigationItem, "description", "Description", {
    validations: shortTextValidations,
  });

  const project = migration
    .createContentType("project")
    .name("Project")
    .description("Public-safe case study or project proof.")
    .displayField("title");

  symbol(project, "title", "Title", {
    required: true,
    validations: titleValidations,
  });
  symbol(project, "slug", "Slug", {
    required: true,
    validations: slugValidation,
  });
  text(project, "summary", "Summary", {
    required: true,
    validations: shortTextValidations,
  });
  symbol(project, "projectType", "Project Type", {
    required: true,
    validations: inValues(PROJECT_TYPES),
  });
  symbol(project, "projectStatus", "Project Status", {
    validations: inValues(PROJECT_STATUSES),
  });
  text(project, "role", "Role", {
    required: true,
    validations: longTextValidations,
  });
  text(project, "contextSummary", "Context Summary", {
    validations: longTextValidations,
  });
  text(project, "problem", "Problem", {
    required: true,
    validations: longTextValidations,
  });
  text(project, "approach", "Approach", {
    required: true,
    validations: longTextValidations,
  });
  text(project, "outcome", "Outcome", {
    required: true,
    validations: longTextValidations,
  });
  richText(project, "caseStudyBody", "Case Study Body", {
    validations: richTextWithCodeAndAssets,
  });
  text(project, "metrics", "Metrics", {
    validations: longTextValidations,
  });
  asset(project, "heroImage", "Hero Image", {
    required: true,
    mimetypeGroup: "image",
  });
  assetArray(project, "galleryImages", "Gallery Images", {
    mimetypeGroup: "image",
  });
  symbol(project, "liveUrl", "Live URL", {
    validations: publicUrlValidation,
  });
  symbol(project, "repositoryUrl", "Repository URL", {
    validations: publicUrlValidation,
  });
  symbolArray(project, "tags", "Tags", {
    validations: sizeMax(12),
  });
  symbol(project, "seoTitle", "SEO Title", {
    validations: seoTitleValidations,
  });
  text(project, "seoDescription", "SEO Description", {
    validations: seoDescriptionValidations,
  });
  asset(project, "socialImage", "Social Image", {
    mimetypeGroup: "image",
  });
  entryArray(project, "skills", "Skills", "skill");
  entryArray(project, "tools", "Tools", "tool");
  entryLink(project, "relatedExperience", "Related Experience", "experienceItem");
  entryArray(project, "relatedProjects", "Related Projects", "project");

  project.changeFieldControl("slug", "builtin", "slugEditor", {
    trackingFieldId: "title",
  });

  const article = migration
    .createContentType("article")
    .name("Article")
    .description("Public writing or guide.")
    .displayField("title");

  symbol(article, "title", "Title", {
    required: true,
    validations: titleValidations,
  });
  symbol(article, "slug", "Slug", {
    required: true,
    validations: slugValidation,
  });
  text(article, "excerpt", "Excerpt", {
    required: true,
    validations: shortTextValidations,
  });
  richText(article, "body", "Body", {
    required: true,
    validations: richTextWithCodeAndAssets,
  });
  date(article, "publishDate", "Publish Date", {
    required: true,
  });
  date(article, "updatedDate", "Updated Date");
  symbol(article, "contentPillar", "Content Pillar", {
    validations: inValues(ARTICLE_PILLARS),
  });
  symbol(article, "category", "Category", {
    validations: inValues(ARTICLE_CATEGORIES),
  });
  symbolArray(article, "tags", "Tags", {
    validations: sizeMax(12),
  });
  asset(article, "heroImage", "Hero Image", {
    mimetypeGroup: "image",
  });
  symbol(article, "seoTitle", "SEO Title", {
    validations: seoTitleValidations,
  });
  text(article, "seoDescription", "SEO Description", {
    validations: seoDescriptionValidations,
  });
  asset(article, "socialImage", "Social Image", {
    mimetypeGroup: "image",
  });
  entryLink(article, "authorProfile", "Author Profile", "personProfile", {
    required: true,
  });
  entryArray(article, "relatedProjects", "Related Projects", "project");
  entryArray(article, "relatedArticles", "Related Articles", "article");
  entryArray(article, "skills", "Skills", "skill");
  entryArray(article, "tools", "Tools", "tool");

  article.changeFieldControl("slug", "builtin", "slugEditor", {
    trackingFieldId: "title",
  });

  const experienceItem = migration
    .createContentType("experienceItem")
    .name("Experience Item")
    .description("Professional role or work-history evidence.")
    .displayField("role");

  symbol(experienceItem, "company", "Company", {
    required: true,
    validations: titleValidations,
  });
  symbol(experienceItem, "role", "Role", {
    required: true,
    validations: titleValidations,
  });
  date(experienceItem, "startDate", "Start Date", {
    required: true,
  });
  date(experienceItem, "endDate", "End Date");
  boolean(experienceItem, "isCurrentRole", "Is Current Role");
  text(experienceItem, "summary", "Summary", {
    required: true,
    validations: shortTextValidations,
  });
  richText(experienceItem, "responsibilities", "Responsibilities", {
    required: true,
    validations: simpleRichText,
  });
  richText(experienceItem, "achievements", "Achievements", {
    required: true,
    validations: simpleRichText,
  });
  symbol(experienceItem, "location", "Location", {
    validations: titleValidations,
  });
  symbol(experienceItem, "employmentType", "Employment Type", {
    validations: inValues(EMPLOYMENT_TYPES),
  });
  symbol(experienceItem, "companyUrl", "Company URL", {
    validations: publicUrlValidation,
  });
  asset(experienceItem, "companyLogo", "Company Logo", {
    mimetypeGroup: "image",
  });
  text(experienceItem, "metrics", "Metrics", {
    validations: longTextValidations,
  });
  text(experienceItem, "contextSummary", "Context Summary", {
    validations: longTextValidations,
  });
  entryArray(experienceItem, "skills", "Skills", "skill");
  entryArray(experienceItem, "tools", "Tools", "tool");
  entryArray(experienceItem, "relatedArticles", "Related Articles", "article");

  const skill = migration
    .createContentType("skill")
    .name("Skill")
    .description("Professional capability.")
    .displayField("name");

  symbol(skill, "name", "Name", {
    required: true,
    validations: titleValidations,
  });
  text(skill, "summary", "Summary", {
    validations: shortTextValidations,
  });
  text(skill, "proofSummary", "Proof Summary", {
    validations: longTextValidations,
  });

  const skillGroup = migration
    .createContentType("skillGroup")
    .name("Skill Group")
    .description("Small curated group of skills.")
    .displayField("name");

  symbol(skillGroup, "name", "Name", {
    required: true,
    validations: titleValidations,
  });
  text(skillGroup, "description", "Description", {
    validations: shortTextValidations,
  });
  integer(skillGroup, "sortOrder", "Sort Order", {
    validations: rangeMin(0),
  });
  entryArray(skillGroup, "skills", "Skills", "skill", {
    required: true,
    validations: requiredArray,
  });

  const tool = migration
    .createContentType("tool")
    .name("Tool")
    .description("Product, platform, framework, technology, or software.")
    .displayField("name");

  symbol(tool, "name", "Name", {
    required: true,
    validations: titleValidations,
  });
  symbol(tool, "category", "Category", {
    required: true,
    validations: inValues(TOOL_CATEGORIES),
  });
  text(tool, "usageContext", "Usage Context", {
    required: true,
    validations: longTextValidations,
  });
  symbol(tool, "externalUrl", "External URL", {
    validations: publicUrlValidation,
  });
  asset(tool, "logo", "Logo", {
    mimetypeGroup: "image",
  });
  entryArray(tool, "skills", "Skills", "skill");
};
