const { Post } = require('../models');

// I created unique dummy information to seed the site so people can do a demo and test the functionality


const postdata = [{
        title: 'Tellus cras adipiscing enim eu turpis egestas pretium aenean',
        content: 'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim suspendisse in est. Accumsan in nisl nisi scelerisque eu ultrices vitae. Ut placerat orci nulla pellentesque dignissim enim sit amet. Tincidunt dui ut ornare lectus sit amet est.',
        user_id: 10
    },
    {
        title: 'Libero enim sed faucibus turpis. Cum sociis natoque penatibus et.',
        content: 'Fermentum posuere urna nec tincidunt praesent. Duis convallis convallis tellus id interdum. Vitae congue mauris rhoncus aenean. Diam in arcu cursus euismod quis. Consectetur a erat nam at lectus urna. Ut tristique et egestas quis ipsum suspendisse ultrices gravida. Odio tempor orci dapibus ultrices in iaculis nunc sed. Posuere urna nec tincidunt praesent. Amet consectetur adipiscing elit pellentesque habitant.',
        user_id: 8
    },
    {
        title: 'Onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        content: 'Urna neque viverra justo nec ultrices dui sapien eget. Nisl purus in mollis nunc sed id. Eu feugiat pretium nibh ipsum consequat nisl vel. Turpis nunc eget lorem dolor sed viverra. Quam elementum pulvinar etiam non quam lacus suspendisse. Diam ut venenatis tellus in metus. Eget dolor morbi non arcu. Magna fringilla urna porttitor rhoncus dolor purus. Non tellus orci ac auctor augue mauris augue. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Orci sagittis eu volutpat odio facilisis mauris. Tempor commodo ullamcorper a lacus. Vitae turpis massa sed elementum tempus egestas sed sed risus. Quis risus sed vulputate odio ut enim. A diam maecenas sed enim ut sem. Enim nulla aliquet porttitor lacus luctus accumsan tortor. At risus viverra adipiscing at in. Hac habitasse platea dictumst quisque sagittis purus sit amet volutpat. Lacus vestibulum sed arcu non.',
        user_id: 1
    },
    {
        title: 'At ultrices mi tempus',
        content: 'Orci ac auctor augue mauris augue neque gravida in fermentum. Vulputate odio ut enim blandit. Arcu vitae elementum curabitur vitae nunc. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Eget nullam non nisi est sit amet facilisis. Amet nisl suscipit adipiscing bibendum est ultricies. Ultrices gravida dictum fusce ut placerat orci. Egestas dui id ornare arcu odio ut sem nulla pharetra. Porta lorem mollis aliquam ut porttitor. Sed viverra tellus in hac habitasse platea dictumst. Volutpat est velit egestas dui id ornare arcu odio ut. Quis enim lobortis scelerisque fermentum dui faucibus in. Felis eget nunc lobortis mattis. Interdum velit euismod in pellentesque massa placerat duis ultricies. Facilisis volutpat est velit egestas dui id. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Neque viverra justo nec ultrices.',
        user_id: 4
    },
    {
        title: 'Duis at tellus',
        content: 'Dictum fusce ut placerat orci nulla pellentesque dignissim. Duis at consectetur lorem donec massa sapien faucibus et. Eget est lorem ipsum dolor sit amet consectetur. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Ipsum dolor sit amet consectetur. Nisl nunc mi ipsum faucibus vitae. Parturient montes nascetur ridiculus mus mauris vitae ultricies. Quis hendrerit dolor magna eget est lorem ipsum dolor. Sapien eget mi proin sed libero enim sed faucibus. Et ultrices neque ornare aenean. Ultricies mi quis hendrerit dolor magna eget. Suspendisse in est ante in. Tortor posuere ac ut consequat semper. Velit scelerisque in dictum non consectetur a. Quam nulla porttitor massa id neque. Orci ac auctor augue mauris augue neque gravida in. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Dui sapien eget mi proin sed. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique. Non blandit massa enim nec dui nunc mattis enim. Hendrerit dolor magna eget est lorem ipsum dolor. Odio aenean sed adipiscing diam donec adipiscing tristique risus nec. Neque volutpat ac tincidunt vitae semper quis lectus. Semper auctor neque vitae tempus quam pellentesque nec. Mauris a diam maecenas sed enim ut sem. Varius duis at consectetur lorem. Lectus magna fringilla urna porttitor rhoncus dolor. Volutpat blandit aliquam etiam erat velit scelerisque. Scelerisque viverra mauris in aliquam sem fringilla ut. Tincidunt vitae semper quis lectus nulla at volutpat. Lobortis feugiat vivamus at augue eget arcu dictum varius duis. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Diam quis enim lobortis scelerisque fermentum dui faucibus. Scelerisque purus semper eget duis. Massa massa ultricies mi quis hendrerit dolor magna eget est. Fermentum leo vel orci porta. Ut consequat semper viverra nam libero justo.',
        user_id: 7
    },
    {
        title: 'Gravida',
        content: 'Mauris vitae ultricies leo integer malesuada nunc vel risus commodo. Malesuada pellentesque elit eget gravida cum sociis natoque. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. Et odio pellentesque diam volutpat commodo. Adipiscing vitae proin sagittis nisl rhoncus mattis. Consectetur adipiscing elit duis tristique sollicitudin nibh. Gravida neque convallis a cras semper auctor. Mattis nunc sed blandit libero. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Maecenas pharetra convallis posuere morbi leo urna. Laoreet non curabitur gravida arcu. Enim praesent elementum facilisis leo vel fringilla est ullamcorper eget. Mauris rhoncus aenean vel elit scelerisque. Ornare lectus sit amet est placerat. Habitant morbi tristique senectus et netus. Pellentesque habitant morbi tristique senectus et netus. Volutpat maecenas volutpat blandit aliquam. Mi quis hendrerit dolor magna eget est. Ornare arcu odio ut sem. Etiam sit amet nisl purus in mollis nunc sed. Ut pharetra sit amet aliquam id diam. Aenean euismod elementum nisi quis. Imperdiet nulla malesuada pellentesque elit. Quis imperdiet massa tincidunt nunc pulvinar. Nibh ipsum consequat nisl vel pretium lectus quam id. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Cras adipiscing enim eu turpis egestas pretium aenean pharetra magna. Integer quis auctor elit sed vulputate mi sit amet mauris. Enim sit amet venenatis urna cursus eget. Semper eget duis at tellus. Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus. Convallis a cras semper auctor neque vitae tempus. Risus at ultrices mi tempus imperdiet. Adipiscing at in tellus integer feugiat scelerisque. In fermentum posuere urna nec tincidunt praesent semper.',
        user_id: 4
    },
    {
        title: 'Et ultrices neque',
        content: 'Rhoncus dolor purus non enim praesent elementum facilisis leo. Eleifend mi in nulla posuere sollicitudin aliquam. Consequat nisl vel pretium lectus quam id leo. Nisl vel pretium lectus quam id leo in. At urna condimentum mattis pellentesque id nibh. Cursus sit amet dictum sit amet justo donec enim diam. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Quis enim lobortis scelerisque fermentum dui. Pretium nibh ipsum consequat nisl vel pretium lectus quam. Mattis enim ut tellus elementum sagittis. Dictum sit amet justo donec enim diam vulputate ut. Iaculis urna id volutpat lacus laoreet. Ac tincidunt vitae semper quis. Convallis convallis tellus id interdum velit laoreet id donec. In ante metus dictum at. Suspendisse sed nisi lacus sed viverra tellus in hac. Facilisis mauris sit amet massa vitae tortor condimentum lacinia quis. Scelerisque eleifend donec pretium vulputate sapien nec. A diam maecenas sed enim ut sem. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Quam quisque id diam vel. Platea dictumst quisque sagittis purus sit amet volutpat consequat mauris. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Dignissim sodales ut eu sem integer vitae. Leo duis ut diam quam nulla porttitor massa id neque. Facilisi etiam dignissim diam quis. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Mattis nunc sed blandit libero volutpat sed cras ornare arcu. Proin libero nunc consequat interdum varius sit amet mattis. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat. Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Enim nulla aliquet porttitor lacus. Amet tellus cras adipiscing enim eu turpis egestas pretium. In hendrerit gravida rutrum quisque non. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Cum sociis natoque penatibus et magnis dis parturient montes nascetur. Lobortis elementum nibh tellus molestie nunc. Volutpat lacus laoreet non curabitur.',
        user_id: 1
    },
    {
        title: 'Luctus',
        content: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum a arcu cursus vitae congue. Scelerisque mauris pellentesque pulvinar pellentesque habitant. Quam nulla porttitor massa id neque aliquam vestibulum. Donec ultrices tincidunt arcu non sodales neque sodales ut etiam. Sed risus pretium quam vulputate dignissim suspendisse in est ante. Facilisi cras fermentum odio eu. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Elit eget gravida cum sociis natoque penatibus et. Cursus risus at ultrices mi. Massa sed elementum tempus egestas. Lorem ipsum dolor sit amet. Integer quis auctor elit sed vulputate. Luctus accumsan tortor posuere ac ut consequat. Fames ac turpis egestas sed tempus urna et pharetra pharetra. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Condimentum lacinia quis vel eros donec ac odio tempor. Faucibus pulvinar elementum integer enim. At in tellus integer feugiat scelerisque varius morbi enim. Laoreet non curabitur gravida arcu. Aliquet lectus proin nibh nisl condimentum id venenatis a. Aliquam sem et tortor consequat id porta nibh venenatis. Lectus urna duis convallis convallis tellus. Quam quisque id diam vel quam elementum pulvinar etiam non. Varius vel pharetra vel turpis nunc eget lorem. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Libero id faucibus nisl tincidunt eget nullam non. Diam maecenas ultricies mi eget mauris pharetra et ultrices neque. Elementum tempus egestas sed sed risus pretium quam. Volutpat maecenas volutpat blandit aliquam etiam erat velit. Nisi vitae suscipit tellus mauris a diam maecenas sed. Euismod elementum nisi quis eleifend. Mauris augue neque gravida in. Fringilla urna porttitor rhoncus dolor. Tortor posuere ac ut consequat semper viverra nam. Id faucibus nisl tincidunt eget nullam non nisi est sit. Est ullamcorper eget nulla facilisi etiam. Sed arcu non odio euismod lacinia at. In dictum non consectetur a erat nam at lectus urna.',
        user_id: 1
    },
    {
        title: 'Blandit massa enim nec dui',
        content: 'Urna nec tincidunt praesent semper. Eget gravida cum sociis natoque penatibus et magnis. Proin nibh nisl condimentum id venenatis. Purus in massa tempor nec feugiat nisl pretium. Nunc scelerisque viverra mauris in. Morbi tristique senectus et netus et malesuada fames ac. Tellus at urna condimentum mattis pellentesque id nibh tortor id. Porta lorem mollis aliquam ut porttitor leo a. Aliquet bibendum enim facilisis gravida neque convallis. A scelerisque purus semper eget duis at tellus. Pulvinar mattis nunc sed blandit libero volutpat sed cras ornare. Convallis a cras semper auctor neque vitae tempus. Eget nullam non nisi est. Vestibulum sed arcu non odio euismod lacinia at quis risus. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl. Neque egestas congue quisque egestas. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Dignissim convallis aenean et tortor at risus viverra adipiscing. Auctor eu augue ut lectus arcu bibendum at varius. Tempor nec feugiat nisl pretium fusce id. Viverra maecenas accumsan lacus vel. Scelerisque purus semper eget duis. Et sollicitudin ac orci phasellus egestas tellus.',
        user_id: 9
    },
    {
        title: 'Tempus',
        content: 'Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim.  ',
        user_id: 5
    },
    {
        title: 'Dictumst',
        content: 'Aliquam id diam maecenas ultricies mi eget mauris. Id faucibus nisl tincidunt eget nullam non nisi est. Nullam eget felis eget nunc lobortis mattis. Suspendisse interdum consectetur libero id faucibus nisl. ',
        user_id: 3
    },
    {
        title: 'Elementum',
        content: 'Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus.  ',
        user_id: 10
    },
    {
        title: 'Forests of Hope',
        content: 'Molestie a iaculis at erat pellentesque adipiscing commodo elit. ',
        user_id: 8
    },
    {
        title: 'Vulputate sapien',
        content: 'Massa tempor nec feugiat nisl pretium fusce id velit ut. Ultrices vitae auctor eu augue ut lectus. ',
        user_id: 3
    },
    {
        title: 'Phasellus',
        content: 'Odio euismod lacinia at quis. Lacus vestibulum sed arcu non odio euismod lacinia at. Urna id volutpat lacus laoreet non. Eget duis at tellus at urna condimentum mattis pellentesque. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Neque egestas congue quisque egestas diam in arcu. Erat nam at lectus urna duis convallis convallis tellus. Venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam. Maecenas pharetra convallis posuere morbi leo urna molestie at. Gravida in fermentum et sollicitudin. Velit ut tortor pretium viverra suspendisse potenti nullam ac. Fames ac turpis egestas sed tempus. Mauris pharetra et ultrices neque ornare aenean euismod. Imperdiet proin fermentum leo vel orci porta non. Lorem dolor sed viverra ipsum nunc aliquet. Feugiat scelerisque varius morbi enim nunc faucibus. Amet consectetur adipiscing elit pellentesque habitant morbi tristique. Tempor nec feugiat nisl pretium fusce id velit ut tortor. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Bibendum est ultricies integer quis auctor elit sed vulputate. Ipsum dolor sit amet consectetur adipiscing elit pellentesque. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Massa tempor nec feugiat nisl pretium fusce id. Amet volutpat consequat mauris nunc congue nisi vitae suscipit. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Nunc id cursus metus aliquam eleifend. Venenatis a condimentum vitae sapien pellentesque habitant. Ac turpis egestas maecenas pharetra convallis posuere. Malesuada fames ac turpis egestas. Convallis aenean et tortor at risus viverra adipiscing at in. Amet volutpat consequat mauris nunc congue nisi vitae suscipit. Amet facilisis magna etiam tempor orci. ',
        user_id: 3
    },
    {
        title: 'Primis in ultrices',
        content: 'Vel facilisis volutpat est velit egestas dui id. Sagittis vitae et leo duis ut. Suspendisse in est ante in. Turpis egestas sed tempus urna et pharetra pharetra massa massa. Nam at lectus urna duis convallis convallis tellus. Bibendum ut tristique et egestas. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Nulla posuere sollicitudin aliquam ultrices sagittis orci. Mattis enim ut tellus elementum sagittis vitae et. Turpis cursus in hac habitasse platea dictumst quisque sagittis purus. Massa sapien faucibus et molestie ac feugiat sed. In egestas erat imperdiet sed euismod. Odio ut enim blandit volutpat maecenas volutpat blandit. Sed felis eget velit aliquet sagittis id consectetur purus. ',
        user_id: 7
    },
    {
        title: 'Consequat ac felis donec et odio pellentesque',
        content: 'Praesent semper feugiat nibh sed pulvinar proin. Sollicitudin nibh sit amet commodo nulla facilisi nullam. A arcu cursus vitae congue mauris rhoncus aenean vel elit. Quam elementum pulvinar etiam non. Vitae congue mauris rhoncus aenean. Tortor at auctor urna nunc. Ultricies mi eget mauris pharetra. At tempor commodo ullamcorper a lacus vestibulum. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. At in tellus integer feugiat scelerisque varius morbi enim nunc. Tincidunt arcu non sodales neque sodales ut. In dictum non consectetur a erat. Suspendisse potenti nullam ac tortor vitae purus. ',
        user_id: 6
    },
    {
        title: 'Elementum sagittis vitae et leo ',
        content: 'Egestas quis ipsum suspendisse ultrices gravida dictum fusce. Vitae tortor condimentum lacinia quis vel. Euismod quis viverra nibh cras. Eget lorem dolor sed viverra ipsum. Mauris commodo quis imperdiet massa tincidunt nunc. Amet nulla facilisi morbi tempus. Id volutpat lacus laoreet non curabitur gravida arcu ac. Dignissim sodales ut eu sem integer. Mauris augue neque gravida in fermentum et sollicitudin ac. Sagittis vitae et leo duis ut diam quam nulla. Sed id semper risus in hendrerit. Massa enim nec dui nunc mattis enim ut tellus. Facilisis mauris sit amet massa. Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies. Elementum nisi quis eleifend quam. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Semper feugiat nibh sed pulvinar proin. Et tortor consequat id porta nibh venenatis cras sed felis. Elementum nisi quis eleifend quam adipiscing vitae. Eget mi proin sed libero enim sed faucibus turpis.',
        user_id: 4
    },
    {
        title: ' Porttitor eget dolor morbi non arcu risus',
        content: 'Amet mauris commodo quis imperdiet massa tincidunt nunc. Laoreet sit amet cursus sit. In pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Scelerisque purus semper eget duis. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Odio facilisis mauris sit amet massa vitae tortor condimentum. Pharetra et ultrices neque ornare aenean euismod elementum. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat. Ac ut consequat semper viverra nam libero justo laoreet sit. Dolor purus non enim praesent elementum. ',
        user_id: 6
    },
    {
        title: 'Ultricies tristique nulla',
        content: 'Sit amet mauris commodo quis. Volutpat lacus laoreet non curabitur gravida arcu. In hac habitasse platea dictumst quisque sagittis purus sit. Erat pellentesque adipiscing commodo elit. Tempus imperdiet nulla malesuada pellentesque elit. Ultricies mi eget mauris pharetra et ultrices neque ornare. Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra. At auctor urna nunc id cursus metus aliquam eleifend. Ut aliquam purus sit amet luctus venenatis lectus magna. Orci porta non pulvinar neque laoreet suspendisse interdum. Vitae tempus quam pellentesque nec nam aliquam sem et. Aliquam malesuada bibendum arcu vitae elementum. Pharetra vel turpis nunc eget lorem dolor sed viverra. Tempus iaculis urna id volutpat lacus laoreet non. Nunc faucibus a pellentesque sit. Odio aenean sed adipiscing diam donec adipiscing tristique. Porta nibh venenatis cras sed. Libero volutpat sed cras ornare arcu dui vivamus. Leo vel orci porta non pulvinar neque laoreet suspendisse. Non nisi est sit amet facilisis magna etiam tempor. Quis blandit turpis cursus in hac. Enim sed faucibus turpis in eu mi. Lectus quam id leo in vitae turpis. Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Fusce ut placerat orci nulla pellentesque dignissim enim sit. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Facilisis leo vel fringilla est. Arcu felis bibendum ut tristique. Interdum consectetur libero id faucibus nisl. Proin gravida hendrerit lectus a. Non consectetur a erat nam at lectus urna duis convallis. Montes nascetur ridiculus mus mauris vitae ultricies leo integer.',
        user_id: 7
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;