import style from './SectionText.module.scss'

const SectionText = ({ title, text }) => {
    return (
        <div className={`${style['about__text']}`}>
            <h1 className={`${style['about__text--title']}`}>
                {title}
            </h1>
            {text && (
                <div className={`${style['about__text--descr']}`}>
                    <p>
                        ჩვენი გუნდი შექმნილია აუთსორსზე მომუშავე იმ ხალხის მიერ რომლებიც მუშაობენ
                        2015 წლიდან.
                    </p>
                    <p>
                        სხვასდასხვა კომპანიებში მათ დააგროვეს ის ხედვა და გამცოდიელბა რაც ამ საქმეში საჭიროა.
                    </p>
                    <p>
                    ჩვენს მიერ შექმნილია კრიპტო პლატფორმის აპლიკაცია, e-commerce საიტები, B2B და P2P სისტემები, ონლაინ ბილეთების პლატფორმა, დავალებების მენეჯმენტის სისტემა, ონლაინ კრიპტო კაზინო და სხვადასხვა UI/UX ვებ-გვერდები.
                    </p>
                </div>
            )}
        </div>
    )
}

export default SectionText