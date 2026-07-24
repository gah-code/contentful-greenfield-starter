# Reference Map

Status: proposed  
Owner: Phase 02 - Content Model Contract + Bootstrap Migration

This is the canonical reference map for the proposed v1 Contentful model. It is not approved for execution until the Phase 02 content model review is complete.

```text
siteSettings
├── defaultSeo -> seoMetadata
├── navigationItems[] -> navigationItem
└── socialLinks[] -> socialLink

personProfile
└── socialLinks[] -> socialLink

project
└── seo -> seoMetadata

article
├── seo -> seoMetadata
└── relatedProjects[] -> project

skillGroup
└── skills[] -> skill
```

## Related Surfaces

- Content types: `docs/content-model/CONTENT-TYPE-LEDGER.md`
- Field IDs: `docs/content-model/FIELD-ID-LEDGER.md`
