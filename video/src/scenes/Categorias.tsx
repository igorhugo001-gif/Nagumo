import {Easing, Interactive, interpolate, useCurrentFrame} from 'remotion';

const CategoriasInner = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <Interactive.Div
        name="Heading"
        style={{
          color: 'white',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 800,
          fontSize: 96,
          lineHeight: 1.1,
          textAlign: 'center',
          marginBottom: 90,
          opacity: interpolate(frame, [0, 15], [0, 1], {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),
        }}
      >
        Tudo organizado
        <br />
        por categoria
      </Interactive.Div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 36,
        }}
      >
        <Interactive.Div
          name="Chip bovinos"
          style={{
            padding: '26px 70px',
            borderRadius: 999,
            backgroundColor: '#C62828',
            color: 'white',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: 64,
            scale: interpolate(frame, [12, 26], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.spring({damping: 12}),
              output: 'perceptual-scale',
            }),
          }}
        >
          Bovinos
        </Interactive.Div>
        <Interactive.Div
          name="Chip suínos"
          style={{
            padding: '26px 70px',
            borderRadius: 999,
            backgroundColor: '#EC407A',
            color: 'white',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: 64,
            scale: interpolate(frame, [20, 34], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.spring({damping: 12}),
              output: 'perceptual-scale',
            }),
          }}
        >
          Suínos
        </Interactive.Div>
        <Interactive.Div
          name="Chip aves"
          style={{
            padding: '26px 70px',
            borderRadius: 999,
            backgroundColor: '#F9A825',
            color: '#14241B',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: 64,
            scale: interpolate(frame, [28, 42], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.spring({damping: 12}),
              output: 'perceptual-scale',
            }),
          }}
        >
          Aves
        </Interactive.Div>
        <Interactive.Div
          name="Chip linguiça"
          style={{
            padding: '26px 70px',
            borderRadius: 999,
            backgroundColor: '#8D6E63',
            color: 'white',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: 64,
            scale: interpolate(frame, [36, 50], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.spring({damping: 12}),
              output: 'perceptual-scale',
            }),
          }}
        >
          Linguiça
        </Interactive.Div>
        <Interactive.Div
          name="Chip salsicha"
          style={{
            padding: '26px 70px',
            borderRadius: 999,
            backgroundColor: '#FF7043',
            color: 'white',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: 64,
            scale: interpolate(frame, [44, 58], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.spring({damping: 12}),
              output: 'perceptual-scale',
            }),
          }}
        >
          Salsicha
        </Interactive.Div>
      </div>
    </>
  );
};

export const Categorias = Interactive.create({
  Component: CategoriasInner,
  layout: 'absolute-fill',
  schema: {
    ...Interactive.backgroundSchema,
  },
});
