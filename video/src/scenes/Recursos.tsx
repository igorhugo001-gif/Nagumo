import {Easing, Interactive, interpolate, useCurrentFrame} from 'remotion';

const RecursosInner = () => {
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
        E ainda…
      </Interactive.Div>
      <div style={{display: 'flex', flexDirection: 'column', gap: 50}}>
        <Interactive.Div
          name="Card CSV"
          style={{
            width: 900,
            display: 'flex',
            alignItems: 'center',
            gap: 44,
            padding: 50,
            borderRadius: 40,
            backgroundColor: 'white',
            fontFamily: 'Poppins, sans-serif',
            opacity: interpolate(frame, [12, 26], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            }),
            translate: interpolate(frame, [12, 26], ['0px 80px', '0px 0px'], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          <div
            style={{
              width: 160,
              height: 160,
              flexShrink: 0,
              borderRadius: 36,
              backgroundColor: '#2196F3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="96" height="96" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 3v12m0 0l-5-5m5 5l5-5M4 19h16"
                stroke="white"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <div style={{fontSize: 60, fontWeight: 800, color: '#14241B'}}>
              Exporta CSV
            </div>
            <div style={{fontSize: 42, color: '#6B7F70'}}>
              Abra no Excel ou Planilhas
            </div>
          </div>
        </Interactive.Div>
        <Interactive.Div
          name="Card offline"
          style={{
            width: 900,
            display: 'flex',
            alignItems: 'center',
            gap: 44,
            padding: 50,
            borderRadius: 40,
            backgroundColor: 'white',
            fontFamily: 'Poppins, sans-serif',
            opacity: interpolate(frame, [26, 40], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            }),
            translate: interpolate(frame, [26, 40], ['0px 80px', '0px 0px'], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          <div
            style={{
              width: 160,
              height: 160,
              flexShrink: 0,
              borderRadius: 36,
              backgroundColor: '#4CAF50',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="96" height="96" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12.5l4.5 4.5L19 7.5"
                stroke="white"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <div style={{fontSize: 60, fontWeight: 800, color: '#14241B'}}>
              Funciona offline
            </div>
            <div style={{fontSize: 42, color: '#6B7F70'}}>
              Dados salvos no aparelho
            </div>
          </div>
        </Interactive.Div>
      </div>
    </>
  );
};

export const Recursos = Interactive.create({
  Component: RecursosInner,
  layout: 'absolute-fill',
  schema: {
    ...Interactive.backgroundSchema,
  },
});
