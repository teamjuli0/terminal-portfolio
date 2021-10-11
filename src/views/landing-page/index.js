import { Terminal, NewLine, Command, Output } from './components'

const LandingPage = () => {
  return (
    <>
      <Terminal>
        <NewLine>
          <Command>cat aboutme.txt</Command>
          <Output>
            Whether I'm spending my time typing away at a keyboard or playing
            board games with my kids, you'll find me smiling and loving every
            second of it. I strive to build simple and elegant apps with
            functionality and client satisfaction at the center. Lead Software
            Developer DataSlate contract where I led a team of software
            developers in conjunction with working with the creative director
            and digital marketing team to implement unique features and sales
            promos.
          </Output>
        </NewLine>
      </Terminal>
    </>
  )
}

export default LandingPage
