"use client"

import Image from 'next/image'
import style from './Work.module.scss'
import icons from './../../../public/assets/img/work/first.svg'
import data from './data.module'

const Work = () => {
    return (
        <section className={`${style['work']}`} >
            <div className={`${style['container']} container`}>
                <div className={`${style['center']} d-flex d-lg-none align-items-start justify-content-center`}>
                    <p className={`${style['text']}`}>Steps to your idea</p>
                </div>
                <div className='row'>
                    <div className={`col-6 col-lg-6 d-flex justify-content-lg-center`} >
                        <div className={`${style['item']} d-flex align-items-center`}>
                            <div className={`${style['number']}`} >
                                {`01`}
                            </div>
                            <h1 className={`${style['title']}`} >ინტერვიუ</h1>
                        </div>
                    </div>
                    <div className={`col-6 col-lg-6 d-flex justify-content-lg-center`} >
                        <div className={`${style['item']} d-flex align-items-center`} style={{marginTop: '49px'}}>
                            <div className={`${style['number']}`} >
                                {`02`}
                            </div>
                            <h1 className={`${style['title']}`} >კვლევა</h1>
                        </div>
                    </div>
                    <div className={`col-6 col-lg-6 d-flex justify-content-lg-start`} >
                        <div className={`${style['item']} d-flex align-items-center`} style={{marginTop: '49px'}}>
                            <div className={`${style['number']}`} >
                                {`03`}
                            </div>
                            <h1 className={`${style['title']}`} >დიზაინი</h1>
                        </div>
                    </div>
                    <div className={`col-6 col-lg-6 d-flex justify-content-lg-end`} >
                        <div className={`${style['item']} d-flex align-items-center`} style={{marginTop: '98px'}}>
                            <div className={`${style['number']}`} >
                                {`04`}
                            </div>
                            <h1 className={`${style['title']}`} >დეველოპმენტი</h1>
                        </div>
                    </div>
                    <div className={`col-6 col-lg-6 d-flex justify-content-lg-center`} >
                        <div className={`${style['item']} d-flex align-items-center`}>
                            <div className={`${style['number']}`} >
                                {`05`}
                            </div>
                            <h1 className={`${style['title']}`} >ტესტირება</h1>
                        </div>
                    </div>
                    <div className={`col-6 col-lg-6 d-flex `} >
                        <div className={`${style['item']} d-flex align-items-center`} style={{marginTop: '49px'}}>
                            <div className={`${style['number']}`} >
                                {`06`}
                            </div>
                            <h1 className={`${style['title']}`} >გაშვება</h1>
                        </div>
                    </div>
                </div>
                <div className={`${style['center']} d-none d-lg-flex align-items-center justify-content-lg-center`}>
                    <p className={`${style['text']}`}>ეტაპები</p>
                    <div className={`${style['line']}`} ></div>
                </div>
            </div>
        </section>
    )
}

export default Work