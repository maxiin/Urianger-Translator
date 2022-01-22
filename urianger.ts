const { Telegraf } = require('telegraf')

let mappedWords = new Map<string, string>();

mappedWords.set("again", "once more");
mappedWords.set("are", "art");
mappedWords.set("back", "returned");
mappedWords.set("bad", "dire");
mappedWords.set("between", "'twixt");
mappedWords.set("come", "cameth");
mappedWords.set("crazy", "chaos");
mappedWords.set("cool", "excellent");
mappedWords.set("dearest", "dearest");
mappedWords.set("defeat", "vanquish");
mappedWords.set("did", "didst");
mappedWords.set("do", "doth");
mappedWords.set("does", "doth");
mappedWords.set("fast", "fleeting");
mappedWords.set("go", "goest");
mappedWords.set("have", "hath");
mappedWords.set("hello", "hail");
mappedWords.set("help", "serve");
mappedWords.set("here", "hither");
mappedWords.set("hey", "hail");
mappedWords.set("hi", "hail");
mappedWords.set("it is", "'tis");
mappedWords.set("its", "'tis");
mappedWords.set("killed", "slain");
mappedWords.set("many", "numerous");
mappedWords.set("my", "mine")
mappedWords.set("need", "requireth");
mappedWords.set("newbie", "neophyte");
mappedWords.set("no", "nay");
mappedWords.set("nah", "nay");
mappedWords.set("only", "merely");
mappedWords.set("perhaps", "mayhap");
mappedWords.set("please", "pray");
mappedWords.set("plz", "pray");
mappedWords.set("pls", "pray");
mappedWords.set("probaby", "perhaps");
mappedWords.set("require", "requireth");
mappedWords.set("rises", "riseth");
mappedWords.set("sometimes", "On occasion");
mappedWords.set("sorry", "apologies")
mappedWords.set("there", "yon");
mappedWords.set("to", "unto");
mappedWords.set("tomorrow", "morrow");
mappedWords.set("want", "desire");
mappedWords.set("weird", "strange");
mappedWords.set("will", "shall");
mappedWords.set("win", "prevail");
mappedWords.set("written", "writ");
mappedWords.set("yes", "aye");
mappedWords.set("yep", "aye");
mappedWords.set("yea", "aye");
mappedWords.set("yesterday", "yester");
mappedWords.set("you", "thee");
mappedWords.set("your", "thy");
mappedWords.set("u", "thee");
mappedWords.set("lmfao", "... hah!");
mappedWords.set("lmao", "... hah!");
mappedWords.set("lol", "... hah!");
mappedWords.set("rofl", "... hah!");
mappedWords.set("haha", "... hah!");
mappedWords.set("irl", "on the source");
mappedWords.set("whats", "what 'tis");
mappedWords.set("im", "I am");
mappedWords.set("o/", "Greetings.");
mappedWords.set("bye", "farewell");
mappedWords.set("god", "the Twelve");
mappedWords.set("implying", "stating");
mappedWords.set("tyfp", "You have my thanks");
mappedWords.set("before", "ere");
mappedWords.set("possess", "possesseth");
mappedWords.set("idk", "I know not");

const bot = new Telegraf(process.env.TELEGRAM_KEY);

function Translate(input: string):string
{
    var words = input.split(' ');
    var outputList = new Array<string>();
    let outputText = "";

    words.forEach((word:string) =>{
        let punctuation = "";
        let regex = RegExp(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g);
        let punctuationMatch = word.match(regex);
        let isUpper = !!word.match(/[A-Z]/g);
        word = word.toLowerCase();
        if(word.endsWith("...")){
            word = word.slice(0, -3);
            punctuation = "..."
        } else if(punctuationMatch){
            punctuation = punctuationMatch.join("");
            word = word.slice(0, -punctuationMatch.length);
        }

        let foundWord = mappedWords.get(word);
        if (foundWord)
        {
            word = foundWord;

            outputList.push(word);
        }
        else
        {
            outputList.push(word);
        }

        if (isUpper)
        {
            word = word[0].toUpperCase() + word.substring(1);
        }

        if (punctuation)
        {
            word += punctuation;
        }
    });

    outputText = outputList.join(" ");

    return outputText;
}

bot.on('text', (ctx: any) => ctx.reply(Translate(ctx.message.text)))

bot.launch()