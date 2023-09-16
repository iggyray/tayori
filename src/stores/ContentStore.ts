import { ref } from 'vue'
import { defineStore } from 'pinia'

type TopicId = 'curry-rice' | ''

type Essay = {
  topicId: TopicId
  title: string
  body: string
}

type Topic = {
  id: TopicId
  header: string
  imageLink: string
}

type State = {
  topic: Topic
  essays: Essay[]
}

export const useContentStore = defineStore('contentStore', () => {
  const defaultTopic: Topic = {
    id: 'curry-rice',
    header: '',
    imageLink: ''
  }

  const state = ref<State>({
    topic: defaultTopic,
    essays: []
  })

  const setTopic = (topicId: string) => {
    const target = allTopics.find((topic) => topic.id === topicId)
    if (!target) return
    state.value.topic = target
  }

  const setEssays = (topicId: string) => {
    const targetEssays = allEssays.filter((essay) => essay.topicId === topicId)
    state.value.essays = targetEssays
  }

  const allTopics: Topic[] = [
    {
      id: 'curry-rice',
      header: 'カレーライス',
      imageLink: './images/curry-rice.jpg'
    }
  ]

  const allEssays: Essay[] = [
    {
      topicId: 'curry-rice',
      title: 'カレーライス',
      body: `パパが作るカレーライスは、私を決して仲間外れにしなかった。
      \n辛いものが苦手な母には、玉ねぎを甘くなるまで炒めて、ジャガイモがトロトロになるまで煮詰めた日本風のまろやかなカレー。時には、トマトベースでスパイスたっぷりなインド風カレーも、別鍋で。
      \n二つのカレーは、バラエティや彩りのためではなくて、みんなが無理をしない食卓を支えていた。
      \nこれは、私が「普通に食べられなかった」とき、キッチンで良く見る光景だった。どこかの適当なブログ記事やSNSで読んだ情報からどんどん食べられるものが減っていって、身体がけろけろになったとき。もちろん、パパがいつも作るようなチキンたっぷりのカレーは、見るだけで頭が真っ白になる、「あくま」のような、恐ろしいものにしか見えなかった。
      \nこれを食べたら、相撲取りみたいになってしまうのではないか。油がいっぱいで、それを炭水化物と取るなんて。足りてないブドウ糖で脳みそをフル稼働させ、そんなことばかり考えていた。「カレーライス」という父の得意料理と土日の週間は、『油と炭水化物の茶色い物体』に自動変換され、そんな脳みそに支配された身体は、その「何か」を口に入れようとするのを拒否する。
      \nそんな中、みんなの夕食がカレーの時、パパは、二つ目の、少し小さめの鍋を使って、私の脳みそが許すカレーを作ってくれた。
      \n家族みんな、ちょっと違うカレーで、食卓を囲んだ。辛いのが好きなパパは、追いカレー粉をしたカレー、妹とママは普通の、弟はチキンを多めによそり（カレーとご飯は別皿で）、私はトマトと豆のカレーを食べた。
      \nちょっと違った夕食を重ねるたびに、私の中でゆっくりと「食べるという営み」がよみがえった。文字通り、「食べる」ことだけじゃなく、食卓を囲んだ人、会話、気持ちなど、「思い出の手がかり」としての営みだ。どこか懐かしいパパのカレーを食べると、自分じゃないような身体の中でも、私は確かに私のままなのだと安堵した。小さめの鍋で煮立つルーを見ると、「私の分もあるんだな」と、包み込まれるような心地がした。
      \n「カレーライス」と聞くと、パパのカレーを思い出す。
      \nみんなと同じように食べるのが、今では理解できないくらい怖かった時に、「それでも良いんだよ、一緒に食べよう」と私にそっと居場所与えてくれるような、まろやかなカレーライスを。当時の私を受け入れてくれるような、カレーライスを思い出す。\n
      \nもっとも、食の思い出というのはどんどん上書きされていくものだ。小さい時はプリキュアカレーしか知らなかった人が、大人になってインドカレー、スリランカカレー、お隣の佐々木さんからお裾分けされたカレーを覚えていく。そんな中で、食べ物が栄養となり身体をつくるのと同じように、それらに伴う思い出は、自分を構成する味になってゆくのだとおもう。\n
      \n20年間別の場所で生活をしていた人と新しく出会って、食卓を共にするときに、「そういえばうちの母親はさ、カレーにドライフルーツを入れるのが好きで、それが普通だと思ってたんだよね。でもあれ、漬け込むとジャム状になって美味いんだよ。」と、会話の導入になったり。\n
      \nそうすると、私は決まって、「うちの父親なんかさ－」と前のめりに喋り出す。
      \n
      \nずっと前の栄養に、私は支えられている。
      \nカレーライスと聞いて、私はそんなことを思う。色んなものに対する怖さと戦っているときも、何も考えていなかった小学生の夏も、その時の自分にとって必要だった安堵や活力を与えてくれたカレーライスを思い出して、私はそんなことを思う。
      `
    },
    {
      topicId: 'curry-rice',
      title: 'カレーライス',
      body: `カレーライスほど過大評価されている料理はきっと他にないと思う。 「子供たちの王道大好物」だの「2日目のカレーが食べれるのは特別な証」だの、メディアの印象操作によって特別な 料理に仕立て上げられているに違いないのだ。				
      \nまず構造から気に入らないのだ。ルーがライスにかけられた状態で出てこられては、こちらもライスだけで完食せざる おえないし、そもそもルーをかける最終工程においての作り手の丁寧さによって、食事のクオリティーが劇的に変わっ てくる。細かいと思うかもしれないが、ルーとライスの割合が5:5なら良いが、3:7なんてなってしまった日には、無茶 苦茶な割合のせいでこちらが慎重に計画しながら食べ進めなくてはいけなくなるわけだ。ここまでくると、単に好みの 問題で、カレーへヘイトを向けているだけのように聞こえるかもしれないが、そんなことはない。現にナンカレーは大好 物だ。わざわざ大手町駅での乗り継ぎを果て西日暮里に食べに行くくらいには私の中で「ナンカレー」は確立した地 位を築いている。これがどれだけのことなのかはきっと、東西線を乗る人にしか理解できない表現だろう。約10分、階 段の上り下りを汗臭くのサラリーマンの間を掻い潜り、1時間半かけてでも食べたいといえば少しはわかりやすいかも しれない。ナンカレーはそもそもが理に適っているのだ。ナンとカレーを分けて並べてあるし、その上ターメリックライス の選択肢まで与えてくれるのだ。それを踏まえると、我ら日本人の国民料理であろうカレーライスがどれだけ食べ手に 不親切か一目瞭然だと思う。					
      \n次に、「2日目のカレー問題」だ。昔から、何かにつけて登場する「2日目のカレーを食べれるのは特別な存在だから」 とかいう訳のわからない表現についてだ。百歩譲って、「2日目のカレーは1日目より美味しい」ならまだ理解はでき る。煮込み料理の一種なのだから、2日目の方が味がより染みて美味しいのは当たり前だ。ただそれをどう繋げれば 「特別」になるのか全くもって理解不能である。そもそものシチュエーションから理解ができないのだ。一体どんな関係 性であれば、前日のカレーライスは食べずに、翌朝のカレーライスだけを口にすることになるのか。そんなの察すると ころ、都合の良い関係性であるか、奥さんに夕食を作らせるも定時に切り上げることのできないブラック企業勤めの旦 那だろう。定時に切り上げられないのは仕方がない、責めるのは可哀想だと思ったかもしれないが、そうとは限らな い。2日目に残るくらいの量のカレーということから、まず一人分のレトルトカレーではないのは察しがつく。そうなると 当然、家族全員が食べることを想定して作っているだろうから、もし食べないのであれば連絡をするべきだ。基本のほ うれんそうもできない夫が、翌朝あっためさせたカレーを食べて思う「幸せ」の感情は自己完結的なものだ。真っ当な 幸せの比喩なのであれば前日から一緒にカレーライスを作っていて欲しいところが、ほとんどが朝だけ突然現れる男 女による「2日目のカレーを食べれる私・俺」という勘違い幸せ表現になっているのが、全く納得ができない。					
      \nこんなことをいくら思っていようが、カレーライスは日本人のソウルフードであり続けるのであろうし、私なんかより大事 にされながら、今日も食卓に並ぶのだ。だから私はひねくれと抵抗の意味を込めて今日もアジアンマーケットでバー モンドカレー横のハヤシライスを手にとるし、デザートの杏仁豆腐を捨ててでも機内食でカレーライスは選ばない。
      `
    }
  ]

  return {
    state,
    allTopics,
    allEssays,
    setTopic,
    setEssays
  }
})
