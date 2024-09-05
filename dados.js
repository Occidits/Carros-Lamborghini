let dados = [
    {
        modelo: 'Lamborghini-350 GT',
        descricao: 'O primeiro modelo de produção da Lamborghini, com linhas elegantes e motor V12.',
        fabricacao: 1964,
        link: 'https://pt.wikipedia.org/wiki/Lamborghini_350_GT',
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/4/41/1966_Lamborghini_350_GT.jpg'
    },
    {
        modelo: 'Lamborghini 400 GT',
        descricao: 'Uma evolução do 350 GT, o 400 GT oferecia mais conforto e espaço, sendo o primeiro 2+2 da Lamborghini. Equipado com um motor V12 de 4 litros, era um grand tourer potente e elegante.',
        fabricacao: 1966,
        link: 'https://pt.wikipedia.org/wiki/Lamborghini_400_GT',
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/9/95/1967_Lamborghini_400_GT_2%2B2%2C_front_left%2C_Greenwich_2018.jpg'
    },
    {
        modelo: 'Lamborghini-Miura',
        descricao: 'Considerado um dos carros esportivos mais importantes e influentes de todos os tempos, o Miura foi pioneiro no conceito de motor central traseiro.',
        fabricacao: 1966,
        link: 'https://pt.wikipedia.org/wiki/Lamborghini_Miura',
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Lamborghini_Miura_%28Kirchzarten%29_jm21313.jpg/800px-Lamborghini_Miura_%28Kirchzarten%29_jm21313.jpg'
    },
    {
        modelo: 'Lamborghini-Marzal',
        descricao: 'Um conceito futurista apresentado no Salão de Automóvel de Genebra de 1967, conhecido por suas portas em formato de tesoura.',
        fabricacao: 1967,
        link: 'https://pt.wikipedia.org/wiki/Lamborghini_Marzal',
        imagem: 'https://i.ytimg.com/vi/jSUFIycMwow/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDc7gncBB1u6Ea_59TL6xC7HEzUyQ'
    },
    {
        modelo: 'Lamborghini-Countach',
        descricao: 'Ícone dos anos 80, o Countach é conhecido por seu design angular e agressivo.',
        fabricacao: 1974,
        link: 'https://pt.wikipedia.org/wiki/Lamborghini_Countach',
        imagem: 'https://quatrorodas.abril.com.br/wp-content/uploads/2021/08/Lamborghini-Countach-1.jpg?quality=70&strip=info&w=720&crop=1'
    },
    {
        modelo: 'Lamborghini Jalpa',
        descricao: 'Um modelo de porte médio, com motor V8 e um design mais compacto, posicionado abaixo do Countach.',
        fabricacao: 1981,
        link: 'https://pt.wikipedia.org/wiki/Lamborghini_Jalpa',
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Paris_-_RM_Sotheby%E2%80%99s_2018_-_Lamborghini_Jalpa_-_1985_-_001.jpg/1200px-Paris_-_RM_Sotheby%E2%80%99s_2018_-_Lamborghini_Jalpa_-_1985_-_001.jpg'
    },
    {
        modelo: 'Lamborghini LM002',
        descricao: 'O primeiro SUV da Lamborghini, um veículo off-road com motor V12, projetado para uso militar e civil.',
        fabricacao: 1986,
        link: 'https://pt.wikipedia.org/wiki/Lamborghini_LM002',
        imagem: 'https://uploads.vrum.com.br/2022/12/0ff3b924-lamborghini-lm002-rambo-lambo-vermelha-de-frente.jpg'
    },
    {
        modelo: 'Lamborghini-Diablo',
        descricao: 'Sucessor do Countach, o Diablo manteve o legado de desempenho e design extravagante.',
        fabricacao: 1990,
        link: 'https://pt.wikipedia.org/wiki/Lamborghini_Diablo',
        imagem: 'https://www.gallery-aaldering.com/wp-content/uploads/gallery/36179056/36179056-25.jpg?v=9'
    },
    {
        modelo: 'Lamborghini-Murciélago',
        descricao: 'Com um nome inspirado em um tipo de morcego, o Murciélago é conhecido por sua potência e design aerodinâmico.',
        fabricacao: 2001,
        link: 'https://pt.wikipedia.org/wiki/Lamborghini_Murciélago',
        imagem: 'https://blenderartists.org/uploads/default/original/4X/1/4/6/1466668a20fa0d4142347dc80fa76e77cf77245b.jpeg'
    },
    {
        modelo: 'Lamborghini-Gallardo',
        descricao: 'O Gallardo foi o modelo de maior sucesso da Lamborghini, oferecendo um equilíbrio entre desempenho e dirigibilidade.',
        fabricacao: 2003,
        link: 'https://pt.wikipedia.org/wiki/Lamborghini_Gallardo',
        imagem: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/masterpieces/gallardo-2003/HEADER.jpg'
    },
    {
        modelo: 'Lamborghini-Aventador',
        descricao: 'Sucessor do Murciélago, o Aventador é um supercarro com motor V12 e design futurista.',
        fabricacao: 2011,
        link: 'https://pt.wikipedia.org/wiki/Lamborghini_Aventador',
        imagem: 'https://tm.ibxk.com.br/2016/12/20/20131218999140.jpg?ims=1200x675'
    },
    {
        modelo: 'Lamborghini-Huracán',
        descricao: 'O Huracán é um supercarro de motor V10 que oferece um desempenho emocionante e um design elegante.',
        fabricacao: 2014,
        link: 'https://pt.wikipedia.org/wiki/Lamborghini_Huracán',
        imagem: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhjNrIjMsrR4QFd1FartdcBKYs7xEiv5I5LwzVqjfXy-381luW5LlQiaDEtabJOlmax55BmshO7CIgzPHpvD494Scajym7oxOl1aiV7pR3SlyX7yEL1j9gb7aBiCigqEvyPGCJbE72cKGm1/s2048/Lamborghini-Huracan-Evo-2022+%25281%2529.JPG'
    },
    {
        modelo: 'Lamborghini-Urus',
        descricao: 'O Urus é o primeiro SUV da Lamborghini, combinando luxo, desempenho e capacidade off-road.',
        fabricacao: 2018,
        link: 'https://pt.wikipedia.org/wiki/Lamborghini_Urus',
        imagem: 'https://quatrorodas.abril.com.br/wp-content/uploads/2022/09/2023-Lamborghini-Urus-S-00003-e1664468948504.jpg?crop=1&resize=1212,909'
    },
    {
        modelo: 'Lamborghini-Aventador SVJ',
        descricao: 'Uma versão ainda mais extrema do Aventador, com aerodinâmica aprimorada e desempenho de pista.',
        fabricacao: 2018,
        link: 'https://pt.wikipedia.org/wiki/Lamborghini_Aventador_SVJ',
        imagem: 'https://fotos-jornaldocarro-estadao.nyc3.cdn.digitaloceanspaces.com/uploads/2018/08/24131730/13b8b986-lamborghini-aventador-svj-8.jpg'
    },
    {
        modelo: 'Lamborghini-Sián',
        descricao: 'O Sián é um hypercar híbrido com um sistema de propulsão inovador e design futurista.',
        fabricacao: 2019,
        link: 'https://pt.wikipedia.org/wiki/Lamborghini_Sián',
        imagem: 'https://f1rst-motors.s3.me-central-1.amazonaws.com/cars/1714765184173-Lamborghini_Sian_0003_5e6c6a3c3e.jpg'
    },
    {
        modelo: 'Lamborghini-Huracán STO',
        descricao: 'Desenvolvido para uso em pista, o Huracán STO combina o desempenho de um supercarro com a agilidade de um carro de corrida.',
        fabricacao: 2021,
        link: 'https://pt.wikipedia.org/wiki/Lamborghini_Huracán_STO',
        imagem: 'https://s2-autoesporte.glbimg.com/rn1IpQnRM4KeVu3zwLb5i7Avdyg=/0x0:1980x1217/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2022/E/D/EPJQ5mRIqLLUvxPSoqBA/lamborghini-huracan-sto-169.jpeg'
    },
];

