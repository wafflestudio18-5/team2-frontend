const Articles = [
{
    writer: "Nicolas Cole",
    title: "20 Things Most People Learn Too Late In Life",
    subtitle: "Life is a journey of twists and turns, peaks and valleys, mountains to climb and oceans to explore.",
    date: "Oct 17",
    time: "5 min",
    profileurl: "https://miro.medium.com/fit/c/25/25/1*xF11-TSkpJSCgLc75f-DFw.jpeg",
    pictureurl: "https://miro.medium.com/fit/c/250/166/1*BO36vszZiTsOZl0EU6lwLA.jpeg",
},/*
{
    writer: "Alan Trapulionis",
    title: "How 7 Lines of Code Turned Into a $36 Billion Empire",
    subtitle: "Two Irish brothers in their 20s outplayed the finance industry with seven lines of code",
    date: "Aug 26",
    time: "4 min",
    profileurl: "https://miro.medium.com/fit/c/25/25/1*ZpqTjur1EEzN4KzM4e-Bnw.png",
    pictureurl: "https://miro.medium.com/fit/c/250/166/1*g8_4A8UOYl6zIwvhAx1YJg.jpeg",
},
{
    writer: "Gillian May",
    title: "The First Signs of Alcoholic Liver Damage Are Not in the Liver",
    subtitle: "Not enough alcoholics are educated about this",
    date: "Sep 30",
    time: "6 min",
    profileurl: "https://miro.medium.com/fit/c/25/25/1*GhG8ZeoE0TGfCHwL9SCrfw.png",
    pictureurl: "https://miro.medium.com/fit/c/250/166/1*Nr83WxHTus-khshg5p8DDQ.png",
},
{
    writer: "Heiki Kohal",
    title: "What Does a Healthy and Compatible Relationship Look Like?",
    subtitle: "If you have that, it should be safe to walk down the aisle.",
    date: "Oct 29",
    time: "4 min",
    profileurl: "https://miro.medium.com/fit/c/25/25/1*bQrOCsmXteRwFJQ7plGXHQ.jpeg",
    picutreurl: "https://miro.medium.com/fit/c/250/166/1*DCF8YSGUjv3m5VMshtvzdA.jpeg",
},
{
    writer: "Sinem Günel",
    title: "7 Things You Should Never Do in the Morning",
    subtitle: "And what to do instead.",
    date: "Oct 30",
    time: "8 min",
    profileurl: "https://miro.medium.com/fit/c/25/25/1*8OIW1rabg1zNia0RjTm0KQ.png",
    pictureurl: "https://miro.medium.com/fit/c/250/166/1*oJmYlYfST1OVWXQefqu-lw.jpeg",
},
{
    writer: "Sofien Kaabar",
    title: "A New Modified Version of the Bollinger Bands in Python",
    subtitle: "Creating an Alternative Volatility Bands System",
    date: "Nov 7",
    time: "5 min",
    profileurl: "https://miro.medium.com/fit/c/25/25/1*NZI8Qh3vwxOLZj4N_zurFg@2x.png",
    pictureurl: "https://miro.medium.com/fit/c/250/166/1*0l7-vV_6zXMjAZzpRLM2xw.jpeg",
},
{
    writer: "Kaki Okumura",
    title: "How Japanese People Stay Fit for Life, Without Ever Visiting a Gym",
    subtitle: "For people stressed or intimidated by fitness culture",
    date: "Nov 6",
    time: "4 min",
    profileurl: "https://miro.medium.com/fit/c/25/25/1*HQTxFkIf5fymNTatLc0qjA.jpeg",
    pictureurl: "https://miro.medium.com/fit/c/250/166/1*oj6N_VogT8cdkUk58sSLHg.jpeg",
},
{
    writer: "Joana Carneiro",
    title: "My Software Engineer Roadmap",
    subtitle: "Intro",
    date: "Nov 22",
    time: "7 min",
    profileurl: "https://miro.medium.com/fit/c/25/25/1*Xd2uZaVHfrGOP14W_3UQRg.jpeg",
    pictureurl: "https://miro.medium.com/fit/c/250/166/1*t1dU-ilItNvLVkMddbvHpw.png",
},
{
    writer: "Glenna Gill",
    title: "What About Men Who Don’t Cheat?",
    subtitle: "There is a difference between a loser and a keeper.",
    date: "Nov 12",
    time: "4 min",
    profileurl: "https://miro.medium.com/fit/c/25/25/1*2jAEzux2mwkkBwftv7evGA.png",
    pictureurl: "https://miro.medium.com/fit/c/250/166/0*qXX-1Cj4MXoRKoaZ",
},
{    
    writer: "Renata Gomes",
    title: "Marriage Disproportionally Benefits Men",
    And women are quitting it in droves.
    Nov 13
    ·
    6 min read

    Forge
    Alexander M. Combstrong
    in
    Forge
    To Become Happier, Ask Yourself These Two Questions Every Night
    The one-minute exercise can make a profound difference
    Oct 14
    ·
    3 min read

    Business Insider
    Business Insider
    This is what it looks like when things fall apart
    Rudy Giuliani’s pathetic press conference underscored how little President Trump has to back his claims of election fraud.
    Nov 21
    ·
    5 min read

    Elemental
    Gillian May
    in
    Elemental
    The First Signs of Alcoholic Liver Damage Are Not in the Liver
    Not enough alcoholics are educated about this
    Sep 30
    ·
    6 min read

    Books Are Our Superpower
    Matt Karamazov
    in
    Books Are Our Superpower
    4 Must-Read Psychology Books That Most People Have Never Heard Of
    Book #3 changed the way my mind worked forever
    Nov 18
    ·
    6 min read

    Entrepreneur's Handbook
    Alan Trapulionis
    in
    Entrepreneur's Handbook
    How 7 Lines of Code Turned Into a $36 Billion Empire
    Two Irish brothers in their 20s outplayed the finance industry with seven lines of code
    Aug 26
    ·
    4 min read

    Charger
    Sumit Garg
    in
    Charger
    How This Designer Made $100,000 in 6 Days
    Welcome to the internet
    Nov 19
    ·
    3 min read

    The Bad Influence
    Stephanie Tolk
    in
    The Bad Influence
    What I Learned About Humanity as an Airbnb Owner
    And it ain’t pretty
    Nov 3
    ·
    4 min read

    Rizky Maulana Nurhidayat
    Rizky Maulana Nurhidayat
    Python Will be Dead in 2021?
    A review of the final version of Python 3.9
    Nov 11
    ·
    4 min read

    Forge
    Ashley Abramson
    in
    Forge
    A Better Way to Check in Than ‘How Are You’
    Why observations are more powerful than questions
    Nov 23
    ·
    4 min read

    Assemblage
    Carrie Wynn
    in
    Assemblage
    Four Relationship Problems You Should Address Sooner Rather Than Later
    #3. A lack of intimacy
    Nov 4
    ·
    4 min read

    Better Programming
    Zack Shapiro
    in
    Better Programming
    The Best Engineering Advice I Ever Got: “I Don’t Really Care, Just Make it Work”
    Stop lettings “shoulds,” academics, and random blog posts stop you and your team from shipping
    Nov 13
    ·
    4 min read

    Lessons from History
    Mythili the dreamer
    in
    Lessons from History
    The Brilliant Scientist Who Stopped the Roman Army
    During the siege of Syracuse, Archimedes singlehandedly stopped the Roman Army for almost two years leaving them frustrated and angry.
    Nov 7
    ·
    5 min read

    Publishous
    Sean Kernan
    in
    Publishous
    What The Smartest Man in The World Can Teach You About Happiness
    Lessons from the life arch of Kim Ung-Yong.
    Oct 30
    ·
    4 min read

    In Fitness And In Health
    Daniele D'Alessio
    in
    In Fitness And In Health
    3 Brutal Reasons Why You’re Not Building Muscle
    These will stop you from making gains
    Oct 31
    ·
    5 min read

    Lonna Whiting
    Lonna Whiting
    It’s Not You. It’s the Alcohol.
    For at least a year into my life as an ex-drinker, I began to hate lot of things I used to love.
    Nov 9
    ·
    4 min read*/
    ]