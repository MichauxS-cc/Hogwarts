import "../css/Courses.css";
import Acourse from "./Acourse.js";
import DarkArts from "../pics/Dark Arts.png";
import DefenceAgainstTheDarkArts from "../pics/Defence Against the Dark Arts.png";

function Courses() {
    return (
        <div className="max-container">
            <h1>
                <img
                    src="https://see.fontimg.com/api/renderfont4/MVZ6w/eyJyIjoiZnMiLCJoIjo4NSwidyI6MTAwMCwiZnMiOjg1LCJmZ2MiOiIjRDBBQjIyIiwiYmdjIjoiI0YzMTkxOSIsInQiOjF9/Q29yZSBDbGFzc2Vz/harry-p.png"
                    alt="Harry Potter fonts"
                ></img>
            </h1>

            <div className="course-list">
                <Acourse
                    imgURL="https://i.pinimg.com/originals/ab/67/4b/ab674bd6cf4adf6940c099d7e179aece.jpg"
                    name="Astronomy"
                    description="Astronomy was a core class and subject taught at Hogwarts School of Witchcraft and Wizardry and
                    Uagadou School of Magic. Astronomy is the branch of magic and science that studies stars and the movement of
                    planets. It was a subject where the use of practical magic and spells during lessons was not necessary."
                />
                <Acourse
                    imgURL="https://www.popartuk.com/g/l/l-253445.jpg"
                    name="Charms"
                    description="Charms was a core class and subject taught at Hogwarts School of Witchcraft and Wizardry and
                    Ilvermorny School of Witchcraft and Wizardry. Unsurprisingly, it specialised in the teaching of charms. Even
                    though mastering the science of charm-work was clearly essential to performing the greater part of magic,
                    charm-work was seen as a softer option by some such as Augusta Longbottom who, incidentally, failed her Charms
                    O.W.L.."
                />
                <Acourse
                    imgURL={DarkArts}
                    name="Dark Arts"
                    description="Dark Arts was a class taught at several wizarding schools. Unforgivable Curses and numerous
                    other forms of Dark magic were taught in this class. It is possible that students were used as victims as a form
                    of punishment."
                />
                <Acourse
                    imgURL={DefenceAgainstTheDarkArts}
                    name="Defence Against the Dark Arts"
                    description="Defence Against the Dark Arts (abbreviated as DADA) was a subject taught at Hogwarts School of
                    Witchcraft and Wizardry and Ilvermorny School of Witchcraft and Wizardry. In this class, students studied and
                    learnt how to defend themselves against all aspects of the Dark Arts, including dark creatures, curses, hexes
                    and jinxes (dark charms), and duelling."
                />
                <Acourse
                    imgURL="https://pbs.twimg.com/media/EBzS7GiXYAA-eIX.jpg"
                    name="Flying"
                    description="Flying, also known as Broom Flight Class, was a subject taught at
                    Hogwarts School of Witchcraft and Wizardry. It was taught by Madam Rolanda Hooch, the Hogwarts Flying Instructor
                    and Quidditch referee. The subject taught students how to fly broomsticks."
                />
                <Acourse
                    imgURL="https://purewows3.imgix.net/images/articles/2018_06/potions-cauldron-msn.jpg?auto=format,compress&cs=strip&fit=min&w=728&h=404"
                    name="Potions"
                    description="Potions was a core class and subject taught at Hogwarts School of Witchcraft and Wizardry and
                    Ilvermorny School of Witchcraft and Wizardry. In this class, students learnt the correct way to brew potions.
                    They followed specific recipes and used various magical ingredients to create potions, starting with simple ones
                    and moving to more advanced ones as they progressed in knowledge."
                />
                <Acourse
                    imgURL="https://d1x7zurbps6occ.cloudfront.net/product/xlarge/944484-253448.jpg"
                    name="Herbology"
                    description="Herbology was the study of magical and mundane plants and fungi, making it the wizarding
                    equivalent to botany. Herbology was a core class and subject taught at Hogwarts School of Witchcraft and
                    Wizardry and Castelobruxo, in which students learned to care for and utilise plants, learn about their magical
                    properties and what they are used for. Many plants provided ingredients for potions and medicine, while others
                    had magical effects of their own right."
                />
                <Acourse
                    imgURL="https://www.picclickimg.com/d/l400/pict/392602926719_/Harry-Potter-Divination-Crystal-Ball-The-Noble-Collection.jpg"
                    name="Divination"
                    description="Divination was an elective course taught at Hogwarts School of Witchcraft and Wizardry. It
                    taught methods of divining the future, or gathering insights into future events, through various rituals and
                    tools. The magic taught in this class, as well as the ability to say prophetic things was a branch of magic
                    referred to as Divination."
                />
            </div>
        </div>
    );
}

export default Courses;
