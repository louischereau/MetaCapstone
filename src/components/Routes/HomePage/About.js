import '../../styles/About.css';
import Chefs from '../../assets/Mario and Adrian A.jpg';

const About = () => {
    return (
        <div id="about">
            <h1>About</h1>
            <div id="about-little-lemon">
                <img src={Chefs} alt="chefs" />
                <p>
                    Little lemon is a place of honour for sunny flavours and colourful dishes. The menu revisits with panache a sunny
                    cuisine to be shared, and a high level of service: all essential ingredients to make Little Lemon THE seasonal destination.
                    The great classics of Mediterranean cuisine: pissaladière, small stuffed dishes, but also the great Niçoise salad,
                    gambas flambéed with pastis, or lamb chops roasted with thyme. For dessert, let yourself be tempted by the
                    inevitable tarte tropézienne, the unstructured Menton lemon tart and the beautiful plate of red fruits.
                </p>
            </div>
        </div>
    );
}

export default About;