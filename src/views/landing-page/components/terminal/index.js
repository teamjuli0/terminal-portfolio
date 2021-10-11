export const NewLine = ({ children }) => {
  return <div>{children}</div>
}

export const Command = ({ children }) => {
  return (
    <p
      style={{
        color: 'white',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '14px',
      }}
    >
      <span
        style={{
          fontWeight: 'bold',
          color: '#1abc9c',
        }}
      >
        [teamjuli0@ryzen-manjaro ~]$
      </span>{' '}
      {children}
    </p>
  )
}

export const Output = ({ children }) => {
  return (
    <p
      style={{
        color: '#e5e5e5',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '14px',
        padding: '5px 0',
        lineHeight: '15px',
      }}
    >
      {children}
    </p>
  )
}

const Terminal = ({ children, width, height }) => {
  const contentHeight = height ? height.split('px')[0] - 40 + 'px' : undefined

  return (
    <>
      <div
        style={{
          borderRadius: '0 0 50px 50px',
          display: 'flex',
          justifyContent: 'center',
          // alignItems: 'center',
          width: width || '100%',
          flexWrap: 'wrap',
          margin: 'auto',
          letterSpacing: '.5px',
          height: height || 'inherit',
        }}
      >
        <div
          style={{
            flex: '0 0 80%',
            backgroundColor: '#2d3132',
            borderRadius: '10px',
            // border: '7px solid #656e70',
            display: 'flex',
            // flexDirection: 'row',
            flexWrap: 'wrap',
            padding: '0 7px',
            height: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flex: '0 0 100%',
              height: '35px',
            }}
          >
            <div
              style={{
                margin: '10px 3.5px',
                // margin: '10px 3.5px 10px 10px',
                height: '13px',
                width: '13px',
                borderRadius: '50%',
                backgroundColor: '#d9534f',
              }}
            ></div>
            <div
              style={{
                margin: '10px 3.5px',
                height: '13px',
                width: '13px',
                borderRadius: '50%',
                backgroundColor: '#ecd24c',
              }}
            ></div>
            <div
              style={{
                margin: '10px 3.5px',
                height: '13px',
                width: '13px',
                borderRadius: '50%',
                backgroundColor: '#5cb85c',
              }}
            ></div>
          </div>
          <div
            style={{
              padding: '0 5px 10px 5px',
              height: contentHeight || 'inherit',
            }}
          >
            {children}
            <Command>
              {' '}
              <span className='cursor'></span>
            </Command>
          </div>
        </div>
      </div>
    </>
  )
}

export default Terminal
