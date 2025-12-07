import CallBtn from '@components/Header/CallBtn'
import style from './FirstSection.module.scss'
import Line from './Line'
import Image from '@node_modules/next/image'

const FirstSection = ({ line, texts, img, bg }) => {
    console.log(texts)

    return (
        <section id='slideshow' className={`${style['slideshow']}`}>
            {bg && <div className={`${style['bg']}`} style={{ backgroundPosition: 'top right', backgroundSize: 'contain' }}></div>}
            <div className='container' style={{ height: '100%' }}>
                <div className={`${style['slideshow__content']}`}>
                    {line && <Line />}
                    <div className={`${style['slideshow__text']}`}>
                        {texts && texts?.map((text) => <h1 key={text}>{text}</h1>)}
                        <CallBtn />
                    </div>
                    {img && (
                        <figure className={`${style['cover']}`}>
                            <Image src={img} width={0} height={0} alt='cover' />
                        </figure>
                    )}
                </div>
            </div>
        </section>
    )
}

export default FirstSection