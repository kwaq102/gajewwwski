import webSite from '../img/developer_w1280.jpg'
import host from '../img/cloud_w1280.jpg'
// import seoImg from '../img/laptop-7669027_1280.jpg';
import seoImg from '../img/seo_w1280.jpg';
import adminImg from '../img/admin_w1280.jpg';
import designImg from '../img/design_w1280.jpg';

export const servicesList = [
    {
        img: webSite,
        imgAlt: "title photo",
        title: "Strony internetowe",
        subTitle: "Każda strona jest jak nowa przygoda",
        services: [
            "Tworzę nowoczesne strony internetowe, oparte na najnowszych standardach.",
            "Podejście 'mobile first' gwarantuje doskonałą widoczność na wszystkich urządzeniach, co pozwala Twoim klientom łatwo dotrzeć do Twojej oferty.",
            "Gwarantuję, że każda strona będzie zgodna z aktualnymi trendami i dostosowana do różnych platform, zapewniając wyjątkowe doświadczenie użytkownika.",
        ]
    },

    {
        img: host,
        imgAlt: "Rozwiązania hostingowe",
        title: "Rozwiązania hostingowe",
        subTitle: "Bezpieczne schronienie dla Twojej strony ",
        services: [
            "Doradztwo w wyborze i rejestracji domeny, aby znaleźć idealną nazwę dla Twojej marki.",
            "Wybór odpowiedniego hostingu zgodnego z Twoimi potrzebami.",
            "Implementację protokołu SSL dla zwiększenia bezpieczeństwa.",
            "Umieszczanie treści na serwerze oraz pełną konfigurację."
        ]
    },

    {
        img: seoImg,
        imgAlt: "",
        title: "Optymalizacja SEO",
        subTitle: "Optymalizacja SEO to klucz do królestwa widoczności",
        // subTitle: "Twój sukces w internecie zaczyna się od dobrego SEO",
        // TODO przemyśleć ten subTitle
        services: [
            "Tworzenie stron www przyjaznych wyszukiwarkom, co zwiększa ich widoczność.",
            "Stosowanie najnowszych standardów oraz odpowiednich znaczników semantycznych dla lepszej indeksacji",
            "Wybór właściwych słów kluczowych, które przyciągną potencjalnych klientów.",
            "Optymalizację szybkości działania strony, co wpływa na zadowolenie użytkowników."

        ]
    },

    {
        img: adminImg,
        imgAlt: "",
        title: "Administracja strony",
        subTitle: "Utrzymuj swoją stronę w dobrej formie",
        services: [
            "Zapewniam pełną administrację strony internetowej",
            "Kontrolę nad prawidłowym działaniem witryny, aby uniknąć przestojów",
            "Wprowadzanie niezbędnych poprawek oraz modernizację treści, by strona zawsze wyglądała świeżo",
            "Aktualizację wtyczek CMS w celu zapewnienia bezpieczeństwa i wydajności"
        ]
    },

    {
        img: designImg,
        imgAlt: "",
        title: "Web Design",
        subTitle: "Zaprojektuj swój wirtualny świat",
        services: [
            "Tworzeniu mockupów stron www zgodnych z najnowszymi standardami UX/UI, co zapewnia intuicyjność nawigacji",
            "Projektowaniu logotypów i grafik, które skutecznie oddają charakter Twojej marki",
        ]
    },
]