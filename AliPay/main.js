//input="1y2w3k4b5s6";
input = "2k3b";

media.playMusic(files.cwd() + "/success.mp3");
sleep(media.getMusicDuration());

for (i = 0; i < input.length; i++) {

    output = input[i];

    if (output == "y") {
        media.playMusic(files.cwd() + "/ten_million.mp3");
        sleep(media.getMusicDuration());
    }
    if (output == "w") {
        media.playMusic(files.cwd() + "/ten_thousand.mp3");
        sleep(media.getMusicDuration());
    }
    if (output == "k"||output == "q") {
        media.playMusic(files.cwd() + "/thousand.mp3");
        sleep(media.getMusicDuration());
    }
    if (output == "b") {
        media.playMusic(files.cwd() + "/hundred.mp3");
        sleep(media.getMusicDuration());
    }
    if (output == "s") {
        media.playMusic(files.cwd() + "/ten.mp3");
        sleep(media.getMusicDuration());
    }
    if (output == "d") {
        media.playMusic(files.cwd() + "/dot.mp3");
        sleep(media.getMusicDuration());
    }
    if (output >= "0" && output <= 9) {
        media.playMusic(files.cwd() + "/" + output + ".mp3");
        sleep(media.getMusicDuration());
    }

    //media.playMusic(files.cwd()+"/"+  +".mp3");
    //sleep(media.getMusicDuration());
}

media.playMusic(files.cwd() + "/yuan.mp3");
sleep(media.getMusicDuration());