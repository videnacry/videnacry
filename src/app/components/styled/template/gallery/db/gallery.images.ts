import { GalleryImage} from '../../../molecule/gallery-image/class'

export class GalleryImages {
    static instance = new GalleryImages()

    
    //biography
    biography:GalleryImage = new GalleryImage({pPath:'assets/biography240w.webp', pSizeTablet: 'a4'})
    

    //animals
    bull:GalleryImage = new GalleryImage({pPath:'assets/animals/bull/300w.webp', pSizeTablet: 'a4', pTitle:'Work Life', pLines:["Wouldn't be nice to instead of remember that three useless words, remember the usefull lines of that book ?"]})
    condor:GalleryImage = new GalleryImage({pPath:'assets/animals/condor/300w.webp', pSizeTablet: 'a4', pTitle:'The Condor Shadow', pLines:['Debo decir que muchos de los monstruos tienen sus raíces en nosotros, basta con seguir el aterrador hilillo que nos molesta para encontrar su fundamento en nosotros, por desgracia ¿Quién podría saber que la luz se transmite por el espacio, siendo que procede de algún lugar?, resulta necesario aprender de los más experimentados y deseosos por saber, entonces quizás ese oscuro espacio que nos divide de nuestros mayores enemigos es en realidad un lazo, llevando a que de ser dos pasemos a ser uno.']})
    goat:GalleryImage = new GalleryImage({pPath:'assets/animals/goat/430w.webp', pOrientation:'horizontal',pSize:'a5', pSizeTablet: 'a4', pTitle:'goat'})
    jellyfish:GalleryImage = new GalleryImage({pPath:'assets/animals/jellyfish/300w.webp', pSizeTablet: 'a4', pTitle:'Abstract Sea', pLines:['There seems to be so much empty space when turning our heads up, a free way for us.']})
    liondragon:GalleryImage = new GalleryImage({pPath:'assets/animals/liondragon/380w.webp', pOrientation:'horizontal', pSize: 'a6', pSizeTablet: 'a5', pTitle:'Lion Dragon', pLines:[" interesting creature with animal and anthropomorphism characteristics, it started as a dragon, continued with a mage in the head and end up with arms, hands and lion like face"]})
    panther:GalleryImage = new GalleryImage({pPath:'assets/animals/panther/300w.webp', pSizeTablet: 'a4', pTitle:'Gazing the shape', pLines:['No sería lo mejor ¿Qué el motor tenga mucho espacio disponible?, siendo que hablo de un objeto que pueda modificarse, con el espacio podría diseñar los próximas extremidades y también modificar las antiguas, pero además sería capaz cuando el trabajo haya terminado, de explorar el espacio, imprescindible para desarrollarse.']})
    snake:GalleryImage = new GalleryImage({pPath:'assets/animals/snake/300w.webp', pSizeTablet: 'a4', pTitle:'Efficient creature', pLines:['Seguro que has pasado por momentos donde tuviste que pasar de un ritmo de trabajo a otro y no hablo de trabajo exactamente, comer también viene ha ser tomado como trabajo en esta descripción, entonces este cambio afecta a otras áreas, entre ellas la calidad, y es que al perderte en conseguir, podrías olvidar los detalles, eso hizo que este ser termine por cumplir sus objetivos pero estar lleno de vulnerabilidades, sin embargo, podrían ser su siguiente objetivo...']})
    turkey:GalleryImage = new GalleryImage({pPath:'assets/animals/turkey/300w.webp', pSizeTablet: 'a4', pTitle:'Abstract Air', pLines:['There seems to be so much empty space when turning our heads up, a free way for us.']})
    
    //environments
    lovers:GalleryImage = new GalleryImage({pPath:'assets/environments/lovers/400h.webp', pSize:'a4', pOrientation:'horizontal', pSizeTablet: 'a3', pTitle:'Cosmic Lovers', pLines:['If life is part of the universe, would the universe be narcisistic for watchin constantly its own self?']})
    pact:GalleryImage = new GalleryImage({pPath:'assets/environments/yoga/pact/600w.webp', pSize:'a6', pOrientation:'horizontal', pSizeTablet: 'a5', pTitle:'A body pact', pLines:['If one day were to repeat itself for the rest of your life, what things would there be?', 'What things would happen?', 'what would you be What would be the duration, space, intensity, energy...']})

    //groups
    awareness:GalleryImage = new GalleryImage({pPath:'assets/groups/awareness/680w.webp', pSize:'a1', pSizeTablet: 'a0', pTitle:'awareness', pLines:['Vamos a enfocarnos en la realidad que se crea un sujeto, de modo que el se describe bajo el conocimiento que posee y con ello interactuar con el medio que le rodea (al cual también crea con sus descripciones), así obtenemos a una persona fuerte en un medio pasivo y también otras mezclas de lo más variadas oh sorpresa! Que las descripciones, significados y palabras en si resultan una creación en el mejor de los casos grupal (en favor a la sociedad) y eso que lleva con sigo un porcentaje!, afortunadamente descubrimos qué siempre podemos cambiar con solo crear una nueva realidad pero esta viene dada en niveles, porque no es lo mismo el mundo mental y el físico pero si qué tiene repercusión el uno en el otro (un niño que se considera un adulto por elemplo) aunque no parezca muy notable, y eso aveces por no ver el futuro, además, las realidades que podemos crear también vienen dadas por lo que conocemos o ¿es qué una persona nace sabiendo?, en fin, descubriremos qué en el cuadro los niveles se encuentran bien diferenciados y no sólo por una barrera con forma de arco si no también por su contenido, el cual fue escogido por una razón, estos niveles son los niveles de un ser, se encuentran basados en su realidad, la cual cuando se trata de un conjunto crítico ya no sólo depende él, pues se utiliza la noción qué tienen los espectadores, entonces las qué podrían ser circunferencias se encuentran cortadas por una cabeza respectivamente, la cual representa al portador de dicha realidad, como portador el usuario se encuentra más cercano a la realidad limitada por la circunferencia qué corto, pero aún así se ve afectado por la realidad que su realidad contiene lo que significa que en cualquier momento puede subir o bajar de nivel y que poco o nada percibe los niveles más bajos aún cuando los posee.']})
    hodgepodge:GalleryImage = new GalleryImage({pPath:'assets/groups/hodgepodge/680h.webp', pSize:'a1', pSizeTablet: 'a0', pOrientation:'horizontal', pTitle:'Hodgepodge', pLines:['Concluido el viaje que desembocaría para muchos en graves problemas para pertenecer a la bella sociedad cuyo fin no es otro que la obtención de poder, quiero dejar claro que como una ecuación siempre puede ser igual a 0, nuestro destino es añadir tantos elementos como nos sea posible sin miedo alguno, porque la cantidad siempre será la misma y esto nos dice que hagamos lo que hagamos no llegaremos a dejar los valores solo en una cantidad, y es más, ¿acaso no estamos todos creando castillos sobre la nada? El fin de este lienzo es crear sobre algo, así, para terminar con él es necesario rebasar 1=1 por un 1235428745...=0 y después =1 nuestra realidad entonces participa de la recursividad, vamos, qué hay que superar el juego reglamentado porque si no, se escatima con lo que se puede dar, qué mejor que apreciar las distintas formas qué pueden presentarse debido a la libertad que nos fue otorgada y rechazamos por los peligros que supone, además de la belleza que dificulta, y eso sin contar con los malentendidos qué genera, tan solo en las palabras podemos encontrar motivo de guerra, entonces que mejor que recordar que no hemos nacido con un atlas de la comunicación en la cabeza, qué nos sepa mostrar a todos un mismo valor, resulta importante en un mundo como este saber querer conocer y comprender a la persona y sus acciones (incluidas palabras) antes que compararla para llenar con quienes se nos presenten, largas listas de aprobación y desdén.']})
    mage:GalleryImage = new GalleryImage({pPath:'assets/groups/mage/680w.webp', pSize:'a1', pSizeTablet: 'a0', pTitle:'mage', pLines:['Vamos a enfocarnos en la realidad que se crea un sujeto, de modo que el se describe bajo el conocimiento que posee y con ello interactuar con el medio que le rodea (al cual también crea con sus descripciones), así obtenemos a una persona fuerte en un medio pasivo y también otras mezclas de lo más variadas oh sorpresa! Que las descripciones, significados y palabras en si resultan una creación en el mejor de los casos grupal (en favor a la sociedad) y eso que lleva con sigo un porcentaje!, afortunadamente descubrimos qué siempre podemos cambiar con solo crear una nueva realidad pero esta viene dada en niveles, porque no es lo mismo el mundo mental y el físico pero si qué tiene repercusión el uno en el otro (un niño que se considera un adulto por elemplo) aunque no parezca muy notable, y eso aveces por no ver el futuro, además, las realidades que podemos crear también vienen dadas por lo que conocemos o ¿es qué una persona nace sabiendo?, en fin, descubriremos qué en el cuadro los niveles se encuentran bien diferenciados y no sólo por una barrera con forma de arco si no también por su contenido, el cual fue escogido por una razón, estos niveles son los niveles de un ser, se encuentran basados en su realidad, la cual cuando se trata de un conjunto crítico ya no sólo depende él, pues se utiliza la noción qué tienen los espectadores, entonces las qué podrían ser circunferencias se encuentran cortadas por una cabeza respectivamente, la cual representa al portador de dicha realidad, como portador el usuario se encuentra más cercano a la realidad limitada por la circunferencia qué corto, pero aún así se ve afectado por la realidad que su realidad contiene lo que significa que en cualquier momento puede subir o bajar de nivel y que poco o nada percibe los niveles más bajos aún cuando los posee.']})
    role:GalleryImage = new GalleryImage({pPath:'assets/groups/role/680w.webp', pSize:'a1', pSizeTablet: 'a0', pTitle:'role', pLines:['En nuestra realidad siempre encontraremos que existen caminos opuestos en cuanto a su objetivo, de este modo se rige lo que conocemos y lo usamos para llegar a obtener algo (una bebida dulce por ejemplo), pero estos caminos que cruzamos nos llevan a buscar otro (una bebida amarga) o seguir por uno de sus similares (una bebida muy dulce) y los caminos nos van formando, para comprender la trascendencia de esto vasta con saber que "elegir" es un camino y con esto en cuenta, descubrimos en este cuadro que habla sobre el camino utilizando por medida al ser humano, que cada color representa un camino y el cambio de ser una cosa a otra viene dado por la forma (el hombre azul (soso en caso que subsita) en león (animal que vive por la naturaleza); el feto rojo (ser del que poco depende su vida) en bebe (qué ya puede llorar enérgicamente) y el mismo conjunto es algo que comenzó siendo un tren sobre las ruedas de un tren invertido (transportes qué crecen por lo que llevan y son impulsados el uno por el otro (como las armas y los escudos)), para terminar diré que el verde representa a la naturaleza, el rojo al autocomplacimiento, el azul al rechazo qué es movido por el instinto de supervivencia, el negro a la libre elección (sobreponiendose incluso a lo natural, por ello lleva una forma tan rara y hace de arma y cura, utiliza las nociones abstractas de lo que percibe), el café al conflicto (a favor y en contra, permanece en estado contemplativo a través de sus gafas), y el blanco es el infinito qué se puede encontrar en todas partes y contener en palabras...']})

    //collages
    lion:GalleryImage = new GalleryImage({pPath:'assets/groups/awareness/collage/430w.webp', pSize:'a5', pOrientation:'horizontal', pSizeTablet: 'a3', pTitle:'lion'})
    demon:GalleryImage = new GalleryImage({pPath:'assets/groups/mage/collage/450w.webp', pSize:'a4', pSizeTablet: 'a3', pTitle:'bacteria'})
    deity:GalleryImage = new GalleryImage({pPath:'assets/groups/hodgepodge/collage/400h.webp', pSize:'a4', pOrientation:'horizontal', pSizeTablet: 'a1', pTitle:'humanoid'})

    //people
    raulitos:GalleryImage = new GalleryImage({pPath:'assets/people/family/raulitos/660h.webp', pSize:'a1', pOrientation:'horizontal', pSizeTablet: 'a0', pTitle:'The Family', pLines:['Part of my family inspired me to show the warm of human connections, i hope viewers been able to enjoy them knowing they are time constrained and can be seen illusionary']})
    christian:GalleryImage = new GalleryImage({pPath:'assets/people/family/semigods/christian/300w.webp', pSizeTablet: 'a4', pTitle:'The Entrepeneur', pLines:['¿Qué tanto se puede simplificar lo que es, para poder actuar?', 'Dividir para cero es no hacer nada, aunque divertido resulta que si el numerador fuese cero, la division daría, no hacer nada por siempre,¿ cuántos infinitos se puede obtener en una vida ?']})
    ivelina:GalleryImage = new GalleryImage({pPath:'assets/people/family/semigods/ivelina/300w.webp', pSizeTablet: 'a4', pTitle:'Showing my shield', pLines:['Aunque no es necesario mostrarte de inmediato, el tiempo e impacto variarán hasta el punto en que quizás y pocos serán quienes se queden con algo de tu producto, sin embargo seguramente son muchas las personas que ante la falta de estímulos han podido ver con claridad y de igual manera las qué perdi...']})
    luciana:GalleryImage = new GalleryImage({pPath:'assets/people/family/semigods/luciana/300w.webp', pSizeTablet: 'a4', pTitle:'Luz&Fell', pLines:['Poema de la modelo, primix, artistaMarcial, otaku, estudiosa, alegre...', '"Un ángel tan hermoso y perfecto, tan primoroso para soportar tanto dolor y sufrimiento, desterrado de un supuesto y maravilloso cielo, tan divino y cruel, que yo por el bebería la ginebra del fruto del desgarro para sosegar su rechazo, desearía fenecer ante su presencia, para saciar mi sed y al fin ver su luminiscencia, amanecer en la sutileza de su regazo y ver el enredoso amanecer, a cambio de convertirme en una fructuosa convicción de su ser, el aquelarre ha empezado!, junto a eso mi pensamiento mal formado, imaginé que entre llamas oscuras y lóbregas a logrado, rozar mis labios con sus labios y a un León dormido a enjaulado, el sufrimiento permanece, pero el sentimiento de frenesí, crece y crece, decide quedarse en agonía, para mantenerme a salvo y con vida, intrépidamente denego su propuesta y con un magnetismo impresionante, logra devolverme a la tierra."']})

    osho:GalleryImage = new GalleryImage({pPath:'assets/people/gurus/osho/300w.webp', pSizeTablet: 'a4', pTitle:'osho'})

    //portrait
    portrait:GalleryImage = new GalleryImage({pPath:'assets/portrait/300w.webp', pSizeTablet: 'a4', pTitle:'The Walker', pLines:['The tripartition of the body, abstracting what the heart, stomach, head...means']})


    //sket
    jungle:GalleryImage = new GalleryImage({pPath:'assets/sket/jungle/350w.webp', pOrientation:'vertical', pSizeTablet: 'a4', pTitle:'Abstract Jungle', pLines:["This work had been done with the help of ✨SKE✨ (@e.s.k.e.t) • Instagram photos and videos, go and see his profile, although there aren't his art works there xdd, he can make you a good tattoooo!"]})
    pirates:GalleryImage = new GalleryImage({pPath:'assets/sket/pirates/300w.webp', pSizeTablet: 'a3', pTitle:'Up and Down', pLines:['A friend of mine was talking about how one decides to deserve the love of the universe']})

    //thinks
    camera:GalleryImage = new GalleryImage({pPath:'assets/things/camera/300w.webp', pSizeTablet: 'a4', pTitle:'The Watcher', pLines:['A friend of mine is a photographer and is willing to live as awesome as possible, taking the party with him']})

}

