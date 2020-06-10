function showplastic() {

    removeChildren()
    var elem = document.createElement('div')

    var heading = document.createElement('h4')
    var heading1 = document.createElement('h4')
    var heading2 = document.createElement('h4')
    var heading3 = document.createElement('h4')

    var p = document.createElement('p')
    var p1 = document.createElement('p')
    var p2 = document.createElement('p')
    var p3 = document.createElement('p')
    var p4 = document.createElement('p')
    var p5 = document.createElement('p')
    var p6 = document.createElement('p')
    var p7 = document.createElement('p')
    var p8 = document.createElement('p')
    var p9 = document.createElement('p')
    var p10 = document.createElement('p')

    var subtitlu = document.createTextNode('Reciclare PLASTICE')
    var subtitlu1 = document.createTextNode('Reciclare Fibra PET:')
    var subtitlu2 = document.createTextNode('Reciclare BANDA PET:')
    var subtitlu3 = document.createTextNode('Reciclare rPET:')

    var nod = document.createTextNode('Unul din cele mai intrebuintate materiale din lume este plasticul. Prin colectarea si reciclarea plasticului, putem sa evitam consumul de resurse naturale si sa protejam mediul inconjurator.')
    var nod1 = document.createTextNode('Cum sa facem acest lucru cat mai eficient? Esential in reciclarea plasticul este ca produsul sa fie curat. Un produs murdar, sau unul cu deseuri alimentare poate contamina un intreg cos de colectare selectiva sau un balot de sticle.')
    var nod2 = document.createTextNode('Suntem obisnuiti cu simbolul reciclarii format dintr-un triunghi de sageti, insa pentru plastic putem diferentia si tipul acestuia, prin codul inserat in interiorul semnului reciclarii.')
    var nod3 = document.createTextNode('lasticele de tip #1 si tip #2 sunt cel mai frecvent utilizate sub forma de sticla de bauturi, pentru ca sunt plastice nu foarte scumpe, usoare, incasabile si usor de reciclat.')
    var nod4 = document.createTextNode('n fabrica de reciclare, sticlele sunt sortate balistic pentru o prima indepartare a impuritatilor, apoi sortate optic pentru indepartarea metalelor. Ulterior, se face si o separare pe culori, dupa care sticlele de PET sunt maruntite in bucati mici, numiti „fulgi”, care sunt spalati pentru a ajunge materie prima secundara. Este important ca sticlele PET sa fie curate, pentru ca din fulgi se obtin materii prime folosite in nenumarate industrii, inclusv industria igienica sau alimentara.')
    var nod5 = document.createTextNode('Dupa ce a fost procesat de instalatii, fulgii pot deveni fibre sintetice poliesterice, banda PET sau Rpet (recycled PET).')

    var nod6 = document.createTextNode('fibra din poliester sintetic inlocuieste cu succes materialul virgin, fiind folosita ca umplutura pentru haine de iara, sacii de dormit si vestele de salvare. Aceasta este folosita si in industria automotive, ca umplutura pentru scaune, tapiserie sau pentru sistemul antifonic. Fulgii proveniti din materiale curate sunt transformati in fibra folosita in industria igienica, pentru servetele, masti medicale sau plasturi. De asemenea, fibra este folosita si in industria constructoare, la panourile de izolatie acustica sau la acoperisuri (pasla).')

    var nod7 = document.createTextNode('Este rezistenta si flexibila, se poate folosi la produse si marfuri cu grad inalt de solicitare. In acelasi timp, garanteaza o tensiune de strangere constanta in toate etapele manipularii pachetului, comportandu-se excelent la schimbari dese de temperatura. Poate fi folosita atat in regim de ambalare manual, cat si automat. Banda PET asigura securitate excelenta si are aplicabilitate in multe domenii: la ambalarea cartonului ondulat, la ambalarea caramizilor si prefabricatelor sau in industria lemnului.')

    var nod8 = document.createTextNode('PET (polietilen tereftalat reciclat) provine din fulgii de plastic folositi in special doar pentru ambalarea sticlelor de plastic, fulgi transformati in granule utilizabile in industria alimentara. Granulele de RPET sunt procesate in pre-forme, din care sticle noi prind o noua viata.')
    var nod9 = document.createTextNode('Pungile de plastic si ambalajele sunt, in general tip #2 HDPE si #4 LDPE, ambele reciclabile. Majoritatea pungilor de plastic sunt reciclabile, iar din acestea se pot fabrica mai departe o varietate de produse. Plasticul rezultat din reciclarea tipului #2 si #4 se regaseste intrebuintat in jucarii, coarde elastice sau franghii. Plasticul tip# 3, policlorula de vinil, ultilizata in mod obisnuit in conductele de material plastic, perdele de dus, tuburi medicale etc. Odata reciclate, aceste plastice pot fi regasite la ramele feestrelor sau in conductele de material plastic.')
    var nod10 = document.createTextNode('Plastic #6, regasit in tacamuri de unica folosinta, tavi de depozitat carne sau in indistria de ambalare se poate transforma in mai multe elemente, in mod frecvent ca material izolant.')

    heading.appendChild(subtitlu)
    heading1.appendChild(subtitlu1)
    heading2.appendChild(subtitlu2)
    heading3.appendChild(subtitlu3)

    p.appendChild(nod)
    p1.appendChild(nod1)
    p2.appendChild(nod2)
    p3.appendChild(nod3)
    p4.appendChild(nod4)
    p5.appendChild(nod5)

    p6.appendChild(nod6)

    p7.appendChild(nod7)

    p8.appendChild(nod8)
    p9.appendChild(nod9)
    p10.appendChild(nod10)


    elem.appendChild(heading)
    elem.appendChild(p)
    elem.appendChild(p1)
    elem.appendChild(p2)
    elem.appendChild(p3)
    elem.appendChild(p4)
    elem.appendChild(p5)

    elem.appendChild(heading1)
    elem.appendChild(p6)

    elem.appendChild(heading2)
    elem.appendChild(p7)

    elem.appendChild(heading3)
    elem.appendChild(p8)
    elem.appendChild(p9)
    elem.appendChild(p10)

    var original = document.getElementById('content-area')
    original.append(elem)
}
function showmetal() {

    removeChildren()
    var elem = document.createElement('div')

    var heading = document.createElement('h4')
    var heading1 = document.createElement('h4')
    var heading2 = document.createElement('h4')

    var p = document.createElement('p')
    var p1 = document.createElement('p')
    var p2 = document.createElement('p')
    var p3 = document.createElement('p')

    var pr = document.createElement('p')
    var pr1 = document.createElement('p')

    var par = document.createElement('p')
    var par1 = document.createElement('p')
    var par2 = document.createElement('p')
    var par3 = document.createElement('p')
    var par4 = document.createElement('p')
    var par5 = document.createElement('p')
    var par6 = document.createElement('p')

    var subtitlu = document.createTextNode('Reciclare METALE')
    var subtitlu1 = document.createTextNode('Reciclare BATERII SI BECURI')
    var subtitlu2 = document.createTextNode('Reciclare ELECTRONICELE')

    var nod = document.createTextNode('Dupa ce ai folosit cutia de suc, pune-o intr-un container de colectare selectiva. Cutia, impreuna cu celelalte metale, e transportata la o statie de prelucrare. Aici, un magnet urias separa cutiile de conserve (care sunt fabricate din otel), de cutiile de aluminiu (cum spuneam aici, link catre CUTII DE CONSERVE -cutii de supa, cutii de cafea, cutii de conserve ) care nu sunt magnetice. Ulterior, sunt preluate de o banda transportoare si separate, pentru a fi introduse in alt proces de productie.')
    var nod1 = document.createTextNode('In fabrica de reciclare, cutiile de aluminiu sunt pregatite pentru reprocesare: spalate, maruntite si apoi transformate in bucati de aluminiu numite „chipsuri”. Chipsurile la randul lor sunt topite intr-un cuptor gigant, apoi aluminiul rezultat este turnat in forme, numite „lingouri”. Acest proces de topire elimina cernelurile si alte impuritati care pot fi prezente pe aluminiu.')
    var nod2 = document.createTextNode('Stiati ca intr-un lingou de acest fel se regasec 1.6 milioane de doze de aluminiu? Lingourile sunt preluate de alt proces tehnologic, ce le transforma in role de foi subtiri, plate si laminate. Acest proces ofera o mai mare rezistenta si flexibilitate aluminiului.')
    var nod3 = document.createTextNode('Din foi, producatorii fac produse noi, cum ar fi cutii de bauturi, folie de ambalat ciocolata, placute de inmatriculare sau folie de aluminiu. In mai putin de 6 saptamani, produsele din aluminiu reciclat ajung inapoi la raft.')

    var node = document.createTextNode('Exista baterii primare: sunt bateriile ce pot fi utilizate doar o singura data, neavand functia reincarcabila. Aceasta categorie include bateriile tip: carbon-zinc, Li-MnO2, argint-zinc, zinc-MnO2, Zinc-Air, alcalinele si baterii secundare: sunt bateriile ce pot fi reincarcabile. Aceasta categorie incude bateriile tip: Ni-Cd, Ni-MH, Li-ion, Pb-Acid.')
    var node1 = document.createTextNode('Intregul proces tehnologic include sortarea manuala, care se realizeaza pe o banda transportoare asigurand eliminarea corpurilor straine, fiind apoi urmata de sitarea mecanica pentru recuperarea bateriilor tip pastila. Tratarea mecanica a bateriilor consta in maruntirea bateriilor (macinare), separarea magnetica, separarea prin sitare si separarea calitativa a particulelor. Din reciclarea bateriilor rezulta fractie feroasa si fractie neferoasa, masa neagra-“black mass”- (un amestec de carbon, zinc si mangan). Fractiile feroase si neferoase reintra in circuitul economic in industria otelului si in furnale de zinc, iar hartia si plasticul sunt valorificate ca si combustibil alternativ in industria cimentului.')

    var nodes = document.createTextNode('In functie de tipul de aparat electric sau electronic, acestea intra in diferite procese de productie pentru a fi tratate si reciclate. Ceea ce rezulta prin reciclare, asa-numitele „fractii”, pot ajunge sa fie folosite pentru fabricarea de produse noi sau pot fi reutilizate ca atare.')
    var nodes1 = document.createTextNode('Aparatele de uz casnic de mari dimensiuni prelucreaza aparate frigorifice mari, frigidere sau aparate de aer conditionat. Pentru ca au un continut de substante periculoase, in vederea decontaminarii acestora, aparatele sunt intai supuse operatiunii de extragere a uleiurilor minerale si agentului frigorific, apoi intra intr-o camera cu atmosfera controlata, complet izolata de mediul inconjurator, unde sunt maruntite. Fractiie separate, rezultate sunt transportate cu ajutorul benzilor transportoare in containere de depozitare a produselor finite: aluminiu, fier, plastic si spuma poliuretanica.')
    var nodes2 = document.createTextNode('Fierul obtinut din reciclarea frigiderelor este folosit la fabricarea blocului motor al masinilor, aluminiul si cuprul este folosit in fabricarea caloriferelor iar plasticul pentru a fabrica alte produse cu componeta de plastic (frigidere, aparate de aer conditionat).')
    var nodes3 = document.createTextNode('Filtre de cafea, prajitoare de paine, aspiratoare sau masini de spalat sunt transformate in fractii de plastic, metale feroase si neferoase, sticla, cabluri si placi de circuit integrat. Filtre de cafea, prajitoare de paine, aspiratoare sau masini de spalat sunt transformate in fractii de plastic, metale feroase si neferoase, sticla, cabluri si placi de circuit integrat.')
    var nodes4 = document.createTextNode('Plasticul de la cafetiere sau de la fiarele de calcat este folosit la fabricarea instrumentelor musicale (de ex, o chitara)')
    var nodes5 = document.createTextNode('Televizoarele si monitoarele care contin tuburi cinescopice sunt dezasamblate manual, in conditii de securitate, in vederea izolarii acestor tuburi. Panoul frontal se separa de partea conica a tubului (care are continut de plumb si pudra fluorecenta) printr-o operatiune speciala, astfel incat sticla sa nu fie afectata. Ulterior se aspira pudra fluorescenta, care contine substante periculoase. In urma tratarii rezulta fractii de sticla (contaminata si necontaminata), metale feroase, neferoase si pudra fluorescenta.')
    var nodes6 = document.createTextNode('Plasticul, aluminiu si fierul din echipamentele IT&C sunt folosite pentru a fabrica alte echipamente de acelasi fel. Din telefoanele mobile se extrag placi de circuit imprimat, cu aur, argint, cupru, nikel, cadmiu, metale pretioase folosite in fabricarea de bijuterii de aur, sau la constructia de nave/vapoare, mobiliere de gradina, placute de inmatriculare sau piese de schimb auto.')

    heading.appendChild(subtitlu)
    heading1.appendChild(subtitlu1)
    heading2.appendChild(subtitlu2)

    p.appendChild(nod)
    p1.appendChild(nod1)
    p2.appendChild(nod2)
    p3.appendChild(nod3)

    pr.appendChild(node)
    pr1.appendChild(node1)

    par.appendChild(nodes)
    par1.appendChild(nodes1)
    par2.appendChild(nodes2)
    par3.appendChild(nodes3)
    par4.appendChild(nodes4)
    par5.appendChild(nodes5)
    par6.appendChild(nodes6)

    elem.appendChild(heading)
    elem.appendChild(p)
    elem.appendChild(p1)
    elem.appendChild(p2)
    elem.appendChild(p3)

    elem.appendChild(heading1)
    elem.appendChild(pr)
    elem.appendChild(pr1)

    elem.appendChild(heading2)
    elem.appendChild(par)
    elem.appendChild(par1)
    elem.appendChild(par2)
    elem.appendChild(par3)
    elem.appendChild(par4)
    elem.appendChild(par5)
    elem.appendChild(par6)

    var original = document.getElementById('content-area')
    original.append(elem)
}
function showsticla() {

    removeChildren()
    var elem = document.createElement('div')

    var heading = document.createElement('h4')
    var heading1 = document.createElement('h4')
    var heading2 = document.createElement('h4')
    var heading3 = document.createElement('h4')
    var heading4 = document.createElement('h4')
    var heading5 = document.createElement('h4')

    var p = document.createElement('p')
    var p1 = document.createElement('p')
    var p2 = document.createElement('p')
    var p3 = document.createElement('p')
    var p4 = document.createElement('p')
    var p5 = document.createElement('p')
    var p6 = document.createElement('p')
    var p7 = document.createElement('p')
    var pr = document.createElement('p')
    var pr1 = document.createElement('p')
    var pr2 = document.createElement('p')
    var pr3 = document.createElement('p')
    var pr4 = document.createElement('p')
    var pr5 = document.createElement('p')
    var pr6 = document.createElement('p')

    var subtitlu = document.createTextNode('RECICLAREA STICLEI')
    var subtitlu1 = document.createTextNode('CUM SE RECICLEAZA?')
    var subtitlu2 = document.createTextNode('CE AVANTAJE ARE RECICLAREA?')
    var subtitlu3 = document.createTextNode('CE POT SA PREDAU PENTRU RECICLARE?')
    var subtitlu4 = document.createTextNode('VOM PRIMI O BONIFICATIE?')
    var subtitlu5 = document.createTextNode('NU SE POT RECICLA:')

    var nod = document.createTextNode('Ca și aluminiul, sticla poate fi reciclată prin topire la infinit, fără a-și pierde proprietățile; tot ca și aluminiul, costurile de reciclare sunt mai mici decât cele de producție a sticlei din materii prime, economisind astfel energie. Sticla are însă, din punctul nostru de vedere, o mare problemă: e practic indestructibilă la coroziune, deoarece se descompune în aproximativ… un milion de ani! Este, de departe, cel mai rezistent deșeu produs de umanitate (PET, cu o durată de viață de cel mult 1.000 de ani, e al doilea în acest clasament).')
    var nod1 = document.createTextNode('Altfel spus, sticla de bere din frigider, dacă nu este reciclată, va continua probabil să existe, în aceeași formă, mult timp după ce specia noastră va fi dispărut. Nu e o perspectivă prea încurajatoare să te gândești că tot ce va rămâne din civilizație vor fi niște sticle goale.')

    var nod2 = document.createTextNode('Procesul este relativ lung, dar în esență simplu: sticlele sunt spălate, apoi sortate după culoare (pigmenții care dau culoarea sticlei nu „ies”), sparte, măcinate, apoi se elimină impuritățile (etichete, hârtie, metal etc.) iar măcinătura este topită și transformată în granule – materia primă pentru diversele utilizări ale sticlei reciclate.')
    var nod3 = document.createTextNode('Din sticlă colorată nu se poate produce decât sticlă de aceeași culoare, cea incoloră fiind astfel mai valoroasă, căci poate fi refolosită în mai multe scopuri. Atenție la sticla termorezistentă, cum sunt vasele de Jena! Aceasta nu trebuie reciclată cu cea obișnuită, pentru că afectează procesul de topire.')
    var nod4 = document.createTextNode('În principiu, din sticlă se face tot sticlă pentru uz casnic, deși există și anumite utilizări ceva mai „exotice” – de pildă faimoasa vată termoizolantă cu care se acoperă conductele de apă caldă, unele amestecuri de betoane sau produse sanitare de genul chiuvetelor.')

    var nod5 = document.createTextNode('Sticla este cel mai rezistent factor poluant, iar reciclarea sa economisește energie și bani. Alături de hârtie, sticla reprezintă cea mai mare a deșeurilor depozitate în gropile de gunoi, în funcție de greutatea acestora.')

    var nod6 = document.createTextNode('Sticle de orice fel, colorate sau nu, de preferință spălate.')

    var nod7 = document.createTextNode('Da, automatele SIGUREC acordă bonuri de cumpărături și pentru sticlele predate!')

    var node = document.createTextNode('Porțelan, cristal, ceramică')
    var node1 = document.createTextNode('Pahare de băut și farfurii')
    var node2 = document.createTextNode('Vase rezistente la căldură – ex. vasele de tip Jena (au temperatura de topire diferită de cea a sticlei folosite la ambalaje)')
    var node3 = document.createTextNode('Farfuriile-suport de la cuptoarele cu microunde')
    var node4 = document.createTextNode('Oglinzi, geamuri, chiuvete din ceramică (pentru acest tip de deșeuri va fi necesară găsirea unui colector de deșeuri din construcții și demolări, care ar urma să le preia cu programare prealabilă)')
    var node5 = document.createTextNode('Ambalaje medicamente și produse cosmetice cu conținut periculos (ex. vopseluri, lacuri de unghii)')
    var node6 = document.createTextNode('Becuri și neoane (deși au în componență sticlă, aceasta este tratată și nu poate fi reciclată împreuna cu ambalajele de sticlă; aceste produse se reciclează separat.')

    heading.appendChild(subtitlu)
    heading1.appendChild(subtitlu1)
    heading2.appendChild(subtitlu2)
    heading3.appendChild(subtitlu3)
    heading4.appendChild(subtitlu4)
    heading5.appendChild(subtitlu5)

    p.appendChild(nod)
    p1.appendChild(nod1)

    p2.appendChild(nod2)
    p3.appendChild(nod3)
    p4.appendChild(nod4)

    p5.appendChild(nod5)

    p6.appendChild(nod6)

    p7.appendChild(nod7)

    pr.appendChild(node)
    pr1.appendChild(node1)
    pr2.appendChild(node2)
    pr3.appendChild(node3)
    pr4.appendChild(node4)
    pr5.appendChild(node5)
    pr6.appendChild(node6)

    elem.appendChild(heading)
    elem.appendChild(p)
    elem.appendChild(p1)

    elem.appendChild(heading1)
    elem.appendChild(p2)
    elem.appendChild(p3)
    elem.appendChild(p4)

    elem.appendChild(heading2)
    elem.appendChild(p5)

    elem.appendChild(heading3)
    elem.appendChild(p6)

    elem.appendChild(heading4)
    elem.appendChild(p7)

    elem.appendChild(heading5)
    elem.appendChild(pr)
    elem.appendChild(pr1)
    elem.appendChild(pr2)
    elem.appendChild(pr3)
    elem.appendChild(pr4)
    elem.appendChild(pr5)
    elem.appendChild(pr6)

    var original = document.getElementById('content-area')
    original.append(elem)
}

function showhartie() {
    removeChildren()
    var elem = document.createElement('div')

    var heading = document.createElement('h4')
    var heading1 = document.createElement('h4')
    var heading2 = document.createElement('h4')
    var heading3 = document.createElement('h4')
    var heading4 = document.createElement('h4')

    var p = document.createElement('p')
    var p1 = document.createElement('p')

    var pr = document.createElement('p')
    var pr1 = document.createElement('p')
    var pr2 = document.createElement('p')
    var pr3 = document.createElement('p')
    var pr4 = document.createElement('p')
    var pr5 = document.createElement('p')
    var pr6 = document.createElement('p')
    var pr7 = document.createElement('p')

    var par = document.createElement('p')
    var par1 = document.createElement('p')
    var par2 = document.createElement('p')
    var par3 = document.createElement('p')
    var par4 = document.createElement('p')

    var par5 = document.createElement('p')
    var par6 = document.createElement('p')
    var par7 = document.createElement('p')
    var par8 = document.createElement('p')
    var par9 = document.createElement('p')
    var par10 = document.createElement('p')

    var para = document.createElement('p')
    var para1 = document.createElement('p')
    var para2 = document.createElement('p')
    var para3 = document.createElement('p')

    var subtitlu = document.createTextNode('Cum se reciclează hârtia?')
    var subtitlu1 = document.createTextNode('Cum reducem consumul de hârtie')
    var subtitlu2 = document.createTextNode('Cum colectăm hârtia')
    var subtitlu3 = document.createTextNode(' Nu se pot recicla:')
    var subtitlu4 = document.createTextNode('Știați că…')    

    var nod = document.createTextNode('Hârtia are o durată de viață redusă, cea de înaltă calitate, cum este hârtia pentru imprimante, poate fi reciclată de maximum 5-7 ori, după care fibrele de celuloză se scurtează prea mult. În acest stadiu, produsul reciclat este de obicei folosit la cofrajele de ouă.')
    var nod1 = document.createTextNode('La fabrica de reciclare, hârtia este împărțită pe diferite categorii, în funcție de calitate – de la hârtia de imprimantă până la cofraje de ouă. Reciclarea propriu-zisă presupune mărunțirea hârtiei și topirea într-un amestec de apă și diverse substanțe chimice, pentru a separa fibrele de celuloză. Amestecul este curățat de diferite resturi cum sunt, de exemplu, capsele metalice. Mixtura de pulpă rezultată, formată din 1% fibră și 99% apă este apoi întinsă pentru a forma o peliculă, urmează a fi presată pentru a îndepărta mare parte din apă. Pelicula de hârtie trece prin role de uscare și de subțiere până se ajunge la consistența dorită. Aceasta este apoi rulată în suluri și transportată la tipografii, producători de ambalaje, etc.')

    var node = document.createTextNode('Solicită factura electronică, în locul celei tipărite.')
    var node1 = document.createTextNode('Plătește facturile online pentru a păstra dovezi electronice, nu tipărite.')
    var node2 = document.createTextNode('Nu accepta flyere și pliante. O sugestie poate fi ca pe cutia poștală să pui un anunț de tipul „Nu doresc materiale promoționale”.')
    var node3 = document.createTextNode('Tipărește documentele doar dacă este neapărat nevoie, folosește hârtie reciclată și printează pe ambele fețe ale colii.')
    var node4 = document.createTextNode('Refolosește foile de hârtie pentru notițe sau ciorne.')
    var node5 = document.createTextNode('Folosește ambalaje reutilizabile de împachetat din textile – iută, in, cutii metalice etc.')
    var node6 = document.createTextNode('Citește cărți în format electronic.')
    var node7 = document.createTextNode('Înlocuiește prosoapele de hârtie cu lavete din bumbac.')

    var nodes = document.createTextNode('Hârtia colectată trebuie să fie curată, necontaminată de resturi de mâncare, băuturi, ulei, vopseluri ș.a.')
    var nodes1 = document.createTextNode('Se colectează hârtia cât mai compact, fără a o face ghem.')
    var nodes2 = document.createTextNode('Se îndepărtează orice părți metalice sau de plastic, cum ar fi: capse, cleme, scotch, folia de plastic de la plicuri.')
    var nodes3 = document.createTextNode('Se colectează pentru reciclare: cărți, caiete, hârtie de birou, hârtie de birou tocată, reviste, ziare, cataloage și broșuri, plicuri (fără inserții de plastic), pungile de hârtie neplastifiate, hârtia maro (kraft).')
    var nodes4 = document.createTextNode('Cutiile de lapte și sucuri se reciclează separat, în coșul pentru plastic (recipiente tetrapak).')

    var nodes5 = document.createTextNode('șervețelele și prosoapele de hârtie;')
    var nodes6 = document.createTextNode('bonul fiscal, hârtia de ambalat lucioasă;')
    var nodes7 = document.createTextNode('hârtia cerată (ex: recipiente pt mâncare cum sunt cutiile de la salate sau mâncarea chinezească, hârtia pentru ambalarea unor alimente vrac, cum ar fi mezelurile);')
    var nodes8 = document.createTextNode('hârtia plastifiată (ex: afișe, coperta revistelor glossy – la rupere se observă o peliculă subțire de plastic lipită de hârtie);')
    var nodes9 = document.createTextNode('paharele din carton pentru cafea (sunt cerate și plastifiate);')
    var nodes10 = document.createTextNode('hârtia cu lipici (ex: post-it).')

    var nodu = document.createTextNode('Omenirea folosește din ce în ce mai multă hârtie? Consumul de hârtie a crescut cu 400% în ultimii 40 de ani, iar acest lucru a dus la exploatarea intensivă a pădurilor, în unele țări apărând fenomenul de despădurire. Se apreciază că aproximativ 35% din copacii tăiați pe întreaga planetă sunt folosiți pentru producerea de hârtie.')
    var nodu1 = document.createTextNode('Reciclarea deșeurilor de hârtie este o activitate menită să producă economii? Producerea hârtiei din lemn consumă mai multe resurse decât producerea hârtiei din deșeuri. Spre exemplu, o tonă de hârtie reciclată poate economisi 17 arbori maturi, 350 de kilograme de calcar, 125 kilograme de sulf, 227.000 litri de apă, 25 m3 spațiu în groapa de gunoi și 225 kilowați-oră.')
    var nodu2 = document.createTextNode('Pentru obţinerea hârtiei din fibre reciclate se foloseşte cu 70% mai puţină energie decât pentru cea din fibre naturale?')
    var nodu3 = document.createTextNode('Reciclarea hârtiei ar duce la scăderea volumului de deșeuri (aproximativ 40% din deșeurile menajere generate în Statele Unite îl constituie deșeurile de hârtie și carton)?')

    heading.appendChild(subtitlu)
    heading1.appendChild(subtitlu1)
    heading2.appendChild(subtitlu2)
    heading3.appendChild(subtitlu3)
    heading4.appendChild(subtitlu4)

    p.appendChild(nod)
    p1.appendChild(nod1)
 
    pr.appendChild(node)
    pr1.appendChild(node1)
    pr2.appendChild(node2)
    pr3.appendChild(node3)
    pr4.appendChild(node4)
    pr5.appendChild(node5)
    pr6.appendChild(node6)
    pr7.appendChild(node7)

    par.appendChild(nodes)
    par1.appendChild(nodes1)
    par2.appendChild(nodes2)
    par3.appendChild(nodes3)
    par4.appendChild(nodes4)

    par5.appendChild(nodes5)
    par6.appendChild(nodes6)
    par7.appendChild(nodes7)
    par8.appendChild(nodes8)
    par9.appendChild(nodes9)
    par10.appendChild(nodes10)

    para.appendChild(nodu)
    para1.appendChild(nodu1)
    para2.appendChild(nodu2)
    para3.appendChild(nodu3)

    elem.appendChild(heading)
    elem.appendChild(p)
    elem.appendChild(p1)

    elem.appendChild(heading1)
    elem.appendChild(pr)
    elem.appendChild(pr1)
    elem.appendChild(pr2)
    elem.appendChild(pr3)
    elem.appendChild(pr4)
    elem.appendChild(pr5)
    elem.appendChild(pr6)
    elem.appendChild(pr7)

    elem.appendChild(heading2)
    elem.appendChild(par)
    elem.appendChild(par1)
    elem.appendChild(par2)
    elem.appendChild(par3)
    elem.appendChild(par4)

    elem.appendChild(heading3)
    elem.appendChild(par5)
    elem.appendChild(par6)
    elem.appendChild(par7)
    elem.appendChild(par8)
    elem.appendChild(par9)
    elem.appendChild(par10)

    elem.appendChild(heading4)
    elem.appendChild(para)
    elem.appendChild(para1)
    elem.appendChild(para2)
    elem.appendChild(para3)

    var original = document.getElementById('content-area')
    original.append(elem)
}

function showorganic() {
    removeChildren()
    var elem = document.createElement('div')

    var heading = document.createElement('h4')
    var heading1 = document.createElement('h4')
    var heading2 = document.createElement('h4')
    var heading3 = document.createElement('h4')

    var p = document.createElement('p')
    var p1 = document.createElement('p')

    var pr = document.createElement('p')
    var pr1 = document.createElement('p')
    var pr2 = document.createElement('p')
    var pr3 = document.createElement('p')
    var pr4 = document.createElement('p')

    var par = document.createElement('p')
    var par1 = document.createElement('p')
    var par2 = document.createElement('p')
    var par3 = document.createElement('p')
    var par4 = document.createElement('p')

    var par5 = document.createElement('p')
    var par6 = document.createElement('p')

    var subtitlu = document.createTextNode('Cum se reciclează deșeurile organice?')
    var subtitlu1 = document.createTextNode('CUM COLECTĂM DEȘEURILE ORGANICE')
    var subtitlu2 = document.createTextNode(' Nu se pot recicla:')
    var subtitlu3 = document.createTextNode('Știați că…')    

    var nod = document.createTextNode('Digestia aerobă – cu sprijinul oxigenului (compostarea): deșeurile vegetale provenite din gospodării sunt amestecate cu deșeurile vegetale provenite de la spațiile verzi, tocate și lăsate la compostat într-un „tunel” timp de 2-4 săptămâni. În acest interval, temperatura din interiorul tunelului ajunge până la 70 grade Celsius, distrugând microorganismele dăunătoare. După alte 1-3 luni (procesul de compostarea poate dura și până la 6-7 luni în funcție de timpul de descompunere al anumitor deșeuri, nivelul de ventilație, umiditate și alți factori care influențează procesul), timp în care compostul este aerisit și vânturat, poate fi utilizat ca fertilizator în parcuri, plantații sau grădini.')
    var nod1 = document.createTextNode('Digestia anaerobă – fără sprijinul oxigenului: procesul folosește microorganismele apărute în mod natural pentru a descompune materia organică în îngrășământ, producând de asemenea și biogaz. Biogazul este transformat în electricitate și căldură. Din  materia organică descompusă se obține un fertilizator utilizat în agricultură.')

    var node = document.createTextNode('Deșeurile organice generate în gospodării se vor colecta separat de deșeurile reciclabile (hârtie-carton, plastic, sticlă, metale, etc.), precum și de deșeurile menajere reziduale.')
    var node1 = document.createTextNode('Produsele alimentare excedentare și neexpirate se vor dona, pe cât posibil, unor centre de copii, cămine de bătrâni, persoane aflate în dificultate sau  vor fi direcționate către adăposturi de animale. De asemenea, pot fi direcționate către organizații de caritate pentru a fi distribuite către locațiile menționate anterior.')
    var node2 = document.createTextNode('Resturile organice vegetale se pot composta în curtea casei, într-un colț amenajat special, sau la grădini urbane comunitare. Dacă nu este posibilă niciuna din aceste variante, se vor preda salubristului ca „fracție umedă”.')
    var node3 = document.createTextNode('În cazul în care deșeurile vegetale se compostează în curtea casei, se va încerca amestecarea resturilor „verzi” (coji de legume, pulpă fructe) cu cele ”uscate” (frunze și flori veștejite), asigurându-se astfel un echilibru al nutrienților compostului (azot, fosfor, potasiu).')
    var node4 = document.createTextNode('Compostul obținut după câteva luni de la colectare se poate folosi ca îngrășământ în grădina proprie sau cea comunitară.')

    var nodes = document.createTextNode('Șervețelele umede')
    var nodes1 = document.createTextNode('Batistele din hârtie')
    var nodes2 = document.createTextNode('Alimente lichide (ex. lapte)')
    var nodes3 = document.createTextNode('Resturi vegetale afectate de dăunători (pot afecta calitatea compostului)')
  
    var nodes4 = document.createTextNode('Un camion de deșeuri organice poate genera energie care să alimenteze 20.000 TV timp de 1 oră')
    var nodes5 = document.createTextNode('Risipa de alimente din România reprezintă o problemă socială majoră: aruncăm anual cca 250 kg de alimente/locuitor (peste media europeană), în timp ce 4,74 milioane de persoane (un sfert din populația României) trăiesc la limita sărăciei şi au dificultăţi în asigurarea hranei')
    var nodes6 = document.createTextNode('Compostul este o alternativă ecologică și sustenabilă la îngrășămintele chimice folosite în agricultură.')

    heading.appendChild(subtitlu)
    heading1.appendChild(subtitlu1)
    heading2.appendChild(subtitlu2)
    heading3.appendChild(subtitlu3)

    p.appendChild(nod)
    p1.appendChild(nod1)
 
    pr.appendChild(node)
    pr1.appendChild(node1)
    pr2.appendChild(node2)
    pr3.appendChild(node3)
    pr4.appendChild(node4)

    par.appendChild(nodes)
    par1.appendChild(nodes1)
    par2.appendChild(nodes2)
    par3.appendChild(nodes3)
   
    par4.appendChild(nodes4)
    par5.appendChild(nodes5)
    par6.appendChild(nodes6)

    elem.appendChild(heading)
    elem.appendChild(p)
    elem.appendChild(p1)

    elem.appendChild(heading1)
    elem.appendChild(pr)
    elem.appendChild(pr1)
    elem.appendChild(pr2)
    elem.appendChild(pr3)
    elem.appendChild(pr4)

    elem.appendChild(heading2)
    elem.appendChild(par)
    elem.appendChild(par1)
    elem.appendChild(par2)
    elem.appendChild(par3)

    elem.appendChild(heading3)
    elem.appendChild(par4)
    elem.appendChild(par5)
    elem.appendChild(par6)


    var original = document.getElementById('content-area')
    original.append(elem)
}

function removeChildren() {
    const myNode = document.getElementById('content-area')
    while (myNode.lastElementChild) {
        myNode.removeChild(myNode.lastElementChild)
    }
}