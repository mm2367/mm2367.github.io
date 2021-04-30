import * as React from "react";
import {SocialIcon} from 'react-social-icons';
import {translations} from "./websiteTexts";

export const Home: React.FunctionComponent = () => {

    return (
        <div className={'container mt-5 home-page my-5'}>
            <h1 className={' d-flex justify-content-center home-page_title'}>Milam Milhouse</h1>
            <div className={' d-flex w-100 justify-content-center'}><img alt={'Milam in Smokey Mountains'}
                src={'./homephoto.jpg'}/>
            </div>
            <div className={'home-page_bio px-3 my-5 d-flex justify-content-center'}>
                {translations.homePage.bioOne}
            </div>
            <div className={'d-flex align-items-center justify-content-center home-page_image-canvas'}>
                {/*<video width={750} autoPlay={true} loop={true}>*/}
                {/*<source src={'./skividmodified.mp4'} type={'video/mp4'}/>*/}
                {/*Sorry, your browser doesn't support embedded videos.*/}
                {/*</video>*/}
            </div>
            <div className={'text-right my-5 home-page_inspo-text'}>
                {translations.homePage.michelleO}
            </div>
            <div className={'d-flex justify-content-center home-page_inspo-text my-3'}>Contact</div>
            <div className={'d-flex justify-content-center my-3'}>
                <SocialIcon className={'mx-1'} url={'https://www.instagram.com/milapartment'}/>
                <SocialIcon className={'mx-1'} url={'https://www.linkedin.com/in/milammilhouse/'}/>
                <SocialIcon className={'mx-1'} url={'mailto:milammilhouse@gmail.com'}/>
            </div>

        </div>
    )
}
