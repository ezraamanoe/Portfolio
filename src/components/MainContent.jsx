import '../App.css'

function MainContent() {
    return(
        <>
        <div className="MainContent-middle">
            <div className="Header">
                SELECTED WORKS
            </div>

            <div className="Container">
                <img src='/Hero.png'></img>
                <div className="Details">
                    <div className="Title">
                    </div>
                    <div className="Caption">
                        This section covers personal projects I have done. Mainly 
                        done for fun or out of curiosity. Details of said projects 
                        are discussed in greater detail in their respective 
                        repositories on my GitHub
                    </div>
                </div>
            </div>

            <div className="Container">
                <img src='/midi.png'></img>
                <div className="Details">
                    <div className="Title">
                        1. Gesture-Controlled MIDI Theremin
                    </div>
                    <div className="Caption">
                    A real-time gesture-controlled MIDI system designed to emulate the behavior of 
                    a theremin using computer vision and MIDI control messages. The system utilizes a 
                    webcam to track hand movements and interpret them as musical notes and pitch shifts. 
                    It sends MIDI messages to control Logic Pro's pitch shifter plugin and VSTs in a DAW (Digital Audio Workstation), 
                    allowing for expressive, touchless music performance. The system uses MediaPipe Hands, a machine learning-based 
                    hand tracking solution, to detect and interpret hand gestures from a live video feed (OpenCV). These gestures 
                    are mapped to MIDI Control Change (CC) messages using rtmidi. Inspired by the theremin, @julip.mp3, and Imogen Heap.
                    <br /><br />
                    Key Features:
                    <br />
                    <br />
                    Gesture Detection:
                    <br />
                    - Utilizes MediaPipe Hands for real-time hand tracking and gesture recognition.
                    <br />
                    - Detects 21 hand landmarks per hand, enabling precise tracking of finger positions and gestures.
                    <br />
                    - Classifies gestures based on the state of extended fingers.MIDI Communication:
                    <br />
                    - Implements rtmidi, a cross-platform MIDI library, to send MIDI CC messages to a DAW.
                    <br />
                    - Maps detected gestures to specific MIDI CC values, which control the semitone shift parameter in the Pitch Shifter plugin.
                    <br />
                    <br />
                    Real-time Video Processing:
                    <br />
                    - Uses OpenCV to capture and process live video from a webcam.
                    <br />
                    - Displays hand landmarks, gesture labels, and a bounding box around the detected hand for visual feedback.
                    <br />
                    <br />
                    Pitch Shifting Logic:
                    <br />
                    - Converts gesture-based inputs into semitone values (e.g., -12 to +12 semitones).
                    <br />
                    - Maps semitone values to MIDI CC values using a linear scaling formula.
                    </div>
                </div>
            </div>
            <div className="footer">© EZRA ANDHITO MANOE 2025</div>

        </div>
        </>
    )
}
export default MainContent