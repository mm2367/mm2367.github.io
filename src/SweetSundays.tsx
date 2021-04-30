import * as React from "react";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export const SweetSundays: React.FunctionComponent = () => {
    return (
        <div className={'sweet-sundays'}>
            <div className={'d-flex mt-5 flex-container justify-content-between'}>
                <div  className={'text-center position-relative inner-container'}>
                    <video muted width={270} height={320} autoPlay={true} loop={true} playsInline={true}>
                        <source src={'./oatmealcookie.mp4'} type={'video/mp4'}/>

                        Sorry, your browser doesn't support embedded videos.
                    </video>
                    <div className={'video-overlay position-absolute w-100 left-0'}>
                        {'Iced Oatmeal Cranberry Cookies'}
                        <br/>
                        <NavigateNextIcon/>
                    </div>
                </div>
                <div className={'text-center position-relative inner-container'}>
                    <video muted width={270} height={320} autoPlay={true} loop={true} playsInline={true}>
                        <source src={'./oatmilk.mp4'} type={'video/mp4'}/>
                        Sorry, your browser doesn't support embedded videos.
                    </video>
                    <div className={'video-overlay position-absolute w-100 left-0'}>
                        {'OatMilk'}
                        <br/>
                        <NavigateNextIcon/>

                    </div>
                </div>
                <div className={'text-center position-relative inner-container'}>
                    <video muted width={270} height={320} autoPlay={true} loop={true} playsInline={true}>
                        <source src={'./pistachiocake.mp4'} type={'video/mp4'}/>
                        Sorry, your browser doesn't support embedded videos.
                    </video>
                    <div className={'video-overlay position-absolute w-100 left-0'}>
                        {'Navel Orange Pistachio Loaf'}
                        <br/>
                        <NavigateNextIcon/>

                    </div>
                </div>
            </div>
        </div>
    )
}
