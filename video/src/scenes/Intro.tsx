import {Easing, Interactive, interpolate, useCurrentFrame} from 'remotion';

const IntroInner = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <Interactive.Div
        name="Logo"
        style={{
          width: 300,
          height: 300,
          borderRadius: 72,
          backgroundColor: '#4CAF50',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 800,
          fontSize: 150,
          boxShadow: '0 30px 80px rgba(76, 175, 80, 0.45)',
          scale: interpolate(frame, [0, 20], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.spring({damping: 12}),
            output: 'perceptual-scale',
          }),
          rotate: interpolate(frame, [0, 20], ['-20deg', '0deg'], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.spring({damping: 12}),
          }),
        }}
      >
        44
      </Interactive.Div>
      <Interactive.Div
        name="Title"
        style={{
          marginTop: 80,
          color: 'white',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 800,
          fontSize: 112,
          lineHeight: 1.05,
          textAlign: 'center',
          opacity: interpolate(frame, [12, 30], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
          translate: interpolate(frame, [12, 30], ['0px 60px', '0px 0px'], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        Inventário
        <br />
        Base 44
      </Interactive.Div>
      <Interactive.Div
        name="Subtitle"
        style={{
          marginTop: 40,
          maxWidth: 860,
          color: '#A5D6A7',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 400,
          fontSize: 52,
          lineHeight: 1.3,
          textAlign: 'center',
          opacity: interpolate(frame, [24, 42], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
          translate: interpolate(frame, [24, 42], ['0px 40px', '0px 0px'], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        O estoque do seu açougue, direto no celular
      </Interactive.Div>
    </>
  );
};

export const Intro = Interactive.create({
  Component: IntroInner,
  layout: 'absolute-fill',
  schema: {
    ...Interactive.backgroundSchema,
  },
});
