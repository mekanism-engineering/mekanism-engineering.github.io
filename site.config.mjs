// Where the site is published. BASE is the path under SITE ('' for the root of the domain, or '/wiki' for
// SITE/wiki/): the only place to change when the address changes.
export const SITE = 'https://mekanism-engineering.github.io';
export const BASE = '';

// The players' survey at the bottom of the home page (src/components/Survey.astro) sends its answers to a Google Form.
// `form` is the form's public id (the part between /forms/d/e/ and /viewform in the link Google gives to share it), the
// others are the numbers of its four questions (entry.<number> in a pre-filled link). An empty `form` hides the survey.
export const SURVEY = { form: '', rating: '', bug: '', plays1201: '', remarks: '' };
