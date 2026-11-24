import {loadFont} from '@remotion/fonts';
import {staticFile} from 'remotion';

// Poppins (SIL Open Font License), bundled locally so renders work offline.
export const fontsLoaded = Promise.all(
  (['400', '600', '800'] as const).map((weight) =>
    loadFont({
      family: 'Poppins',
      url: staticFile(`fonts/Poppins-${weight}.woff2`),
      weight,
    }),
  ),
);
