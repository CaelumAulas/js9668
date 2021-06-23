import { Helmet } from "react-helmet";
import MasterLayout from "../../components/MasterLayout";
import imgConcessionaria from '../../assets/images/foto-concessionaria.jpg';
import '../../assets/css/sobre.css';

export default function SobrePage() {
    return (
        <MasterLayout>
            <Helmet>
                <title>AutoCaelum | Sobre a empresa</title>
            </Helmet>
            <main className="container">
                <h1 className="cabecalho-pagina">Sobre a empresa</h1>
                <figure className="foto-concessionaria">
                    <img src={imgConcessionaria} alt="Foto do pátio da concessionária" />
                    <figcaption>
                        Pátio da concessionária
                    </figcaption>
                </figure>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis veritatis atque earum ratione quis, nostrum ipsam animi perspiciatis aliquid provident a exercitationem, dolore distinctio dolores laudantium incidunt vero optio illo.</p>
                <p>Ut sapiente deserunt nihil rem in totam neque. Facere ipsa id quibusdam error. Iure accusantium, debitis minima harum porro distinctio eveniet quos quaerat voluptatum, quam voluptas totam rem temporibus nesciunt.</p>
                <p>Nulla, est voluptatem in adipisci ratione vitae temporibus expedita illum ab voluptas similique sunt recusandae. Blanditiis voluptate commodi tenetur beatae dignissimos culpa eveniet repellat quae explicabo maxime, quas, exercitationem quasi.</p>
                <p>Doloribus aperiam quidem perspiciatis quis deserunt, libero dignissimos vero enim assumenda, cupiditate corrupti vel commodi modi totam. Quas dicta fuga laborum asperiores. Neque incidunt similique dicta, esse et saepe odio.</p>
                <p>Facere, possimus doloribus. Unde possimus laboriosam, sed aspernatur odio cum, ut dicta, maxime neque officia eligendi facere. Tempore maiores magnam nulla iusto sapiente impedit veritatis. Consequuntur dolores quos quae ad.</p>
                <p>Atque eligendi minima neque, beatae suscipit, incidunt libero sint sequi aperiam nostrum sed soluta eos saepe modi sapiente ex excepturi blanditiis doloremque ratione. Tenetur, id ut? Eos quam natus fuga?</p>
                <p>Quos commodi delectus placeat cupiditate mollitia nihil ea, quas possimus similique inventore necessitatibus veritatis totam odit, laboriosam provident sapiente quidem consequuntur nobis quis, suscipit eligendi nulla! Porro itaque ipsam rem?</p>
                <p>Itaque deleniti ea veniam? Temporibus quidem dolores vero velit dignissimos necessitatibus delectus officia maxime nihil. Corporis error nam cumque saepe voluptatum ab, quibusdam iste expedita eum, a aliquam voluptatem facere.</p>
                <p>Totam facilis illo est magni quos. Nostrum maxime, porro perspiciatis possimus, fugit in molestiae pariatur aliquam minus dicta et, tempora nesciunt? Fugiat blanditiis doloremque quam eum eligendi earum laudantium consectetur.</p>
                <p>Eaque hic velit ut cupiditate, laudantium, consequatur reiciendis fugit quisquam beatae reprehenderit dolorum. Quidem laborum facere est animi, vitae quo illo pariatur, nesciunt nulla nemo eaque atque molestias distinctio impedit.</p>
                <p>Suscipit enim odio nesciunt sint, atque, rem, quam nostrum unde distinctio cupiditate iusto labore? Laborum ea, sint numquam eum cupiditate dolores tempore. Suscipit blanditiis eveniet error. Enim eum architecto assumenda!</p>
                <p>Perferendis doloremque reprehenderit laboriosam rerum voluptas distinctio officia ea, ab facere, modi esse! Fugiat eaque maiores, neque impedit possimus nihil iure doloribus explicabo ipsam fuga omnis alias reprehenderit eveniet quis.</p>
                <p>Totam vel repellendus laudantium quibusdam aliquam consequatur quam molestiae qui deleniti harum cumque odit enim, quod quidem corrupti, exercitationem, esse beatae eaque obcaecati facere praesentium reiciendis. Nisi maxime impedit facere?</p>
                <p>Atque, officiis. Saepe ex nemo at quasi consequuntur minus delectus cumque? Quisquam, nesciunt neque quasi dolore similique itaque, molestiae alias harum doloribus, ad velit ipsum magni illum sint repellendus ducimus.</p>
                <p>Nisi dignissimos omnis possimus id aspernatur neque repellat odit explicabo nesciunt, officiis necessitatibus itaque, quisquam vitae a, reiciendis maxime architecto molestiae voluptatum? Omnis perferendis vel quae neque vitae quisquam. Suscipit!</p>
            </main>
        </MasterLayout>
    );
}