import './VideoPlayer.css'
import video from '../../assets/DanteSpace.mp4'

function VideoPlayer({}){

    return(
        <>
        <div className={`video-player`}>
            <video  src={video} autoPlay muted controls></video>
        </div>
        </>
    )
}
export default VideoPlayer 