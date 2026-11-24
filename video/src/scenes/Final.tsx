import {Easing, Interactive, interpolate, useCurrentFrame} from 'remotion';

const FinalInner = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <Interactive.Div
        name="Title"
        style={{
          color: 'white',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 800,
          fontSize: 120,
          lineHeight: 1.05,
          textAlign: 'center',
          opacity: interpolate(frame, [0, 15], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
          scale: interpolate(frame, [0, 20], [0.85, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.spring({damping: 200}),
            output: 'perceptual-scale',
          }),
        }}
      >
        Seu estoque
        <br />
        sob controle
      </Interactive.Div>
      <Interactive.Div
        name="Call to action"
        style={{
          marginTop: 90,
          padding: '36px 70px',
          borderRadius: 999,
          backgroundColor: '#4CAF50',
          color: 'white',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 800,
          fontSize: 56,
          boxShadow: '0 30px 80px rgba(76, 175, 80, 0.45)',
          opacity: interpolate(frame, [14, 28], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
          translate: interpolate(frame, [14, 28], ['0px 50px', '0px 0px'], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        Instale no seu celular
      </Interactive.Div>
      <Interactive.Div
        name="Brand"
        style={{
          marginTop: 60,
          color: '#A5D6A7',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 600,
          fontSize: 48,
          opacity: interpolate(frame, [26, 40], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
        }}
      >
        Inventário Base 44
      </Interactive.Div>
    </>
  );
};

export const Final = Interactive.create({
  Component: FinalInner,
  layout: 'absolute-fill',
  schema: {
    ...Interactive.backgroundSchema,
  },
});
