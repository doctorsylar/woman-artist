"use strict";
$(function () {
    let innerSpans = [];
    let scrollPos = 0;
    let imageCovers = [];
    let navigation = $('#navigation');
    let workItems = $('.work-item, .exhibitions, .awards, .cv-text');

    let cvPos = $('#cv').offset().top;
    let artworksPos = $('#artworks').offset().top;
    let contactPos = $('#contact').offset().top;

    initialShow();

    function initialShow () {
        $('.main-header .port').addClass('animatedIn');
        setTimeout(function () {
            $('.main-header .of-one').addClass('animatedIn');
        }, 200);
        setTimeout(function () {
            $('.main-header .woman').addClass('animatedIn');
        }, 400);
        setTimeout(function () {
            $('.main-header .artist').addClass('animatedIn');
        }, 600);
        setTimeout(function () {
            innerSpans = $('.inner-span');
            imageCovers = $('.img-cover');
            for (let i = 0; i < innerSpans.length; i++) {
                let span = $(innerSpans[i]);
                let offsetTop = span.offset().top;
                if ($(document).scrollTop() + $(window).height() > offsetTop - 130) {
                    span.addClass('animatedIn');
                    innerSpans.splice(i, 1);
                    i--;
                }
            }
            for (let i = 0; i < imageCovers.length; i++) {
                let cover = $(imageCovers[i]);
                let offsetTop = cover.offset().top;
                if ($(document).scrollTop() + $(window).height() > offsetTop) {
                    cover.addClass('uncovered');
                    imageCovers.splice(i, 1);
                    i--;
                }
            }
        }, 1000);
    }
    $(window).scroll(function () {
        let lastScrollPos = $(document).scrollTop();
        let navPos = navigation.position().top;
        if (lastScrollPos > scrollPos + 30 || lastScrollPos < scrollPos - 30) {
            changeNavigationPos(navPos, lastScrollPos, scrollPos);
            scrollPos = lastScrollPos;
            for (let i = 0; i < innerSpans.length; i++) {
                let span = $(innerSpans[i]);
                let offsetTop = span.offset().top;
                if ($(document).scrollTop() + $(window).height() > offsetTop - 50) {
                    span.addClass('animatedIn');
                    innerSpans.splice(i, 1);
                    i--;
                }
            }
            for (let i = 0; i < imageCovers.length; i++) {
                let cover = $(imageCovers[i]);
                let offsetTop = cover.offset().top;
                if ($(document).scrollTop() + $(window).height() > offsetTop) {
                    cover.addClass('uncovered');
                    imageCovers.splice(i, 1);
                    i--;
                }
            }
            for (let i = 0; i < workItems.length; i++) {
                let workItem = $(workItems[i]);
                let offsetTop = workItem.offset().top;
                if ($(document).scrollTop() + $(window).height() > offsetTop) {
                    workItem.addClass('expanded');
                    workItems.splice(i, 1);
                    i--;
                }
            }
            if (lastScrollPos < artworksPos) {
                $('.nav-item').removeClass('active');
                $('.nav-statement').addClass('active');
            }
            else if (lastScrollPos < cvPos ) {
                $('.nav-item').removeClass('active');
                $('.nav-about').addClass('active');
            }
            else if (lastScrollPos < contactPos ) {
                $('.nav-item').removeClass('active');
                $('.nav-artworks').addClass('active');
            }
            else {
                $('.nav-item').removeClass('active');
                $('.nav-contact').addClass('active');
            }
        }
    });
    function changeNavigationPos(navPos, lastScrollPos, scrollPos) {
        if (navPos > 50 && lastScrollPos > scrollPos) {
            let newPos = navPos - ((lastScrollPos - scrollPos) / 3);
            if (newPos < 20) {
                newPos = 20;
            }
            navigation.css('top', newPos + 'px');
        }
        else if (navPos < $(window).height() - navigation.innerHeight() && lastScrollPos < scrollPos) {
            navigation.css('top', (navPos - ((lastScrollPos - scrollPos) / 3)) + 'px');
        }
    }
    // anchor links slow scroll
    $('.anchor').click(function (event) {
        event.preventDefault();
        let id = $(this).attr('href');
        let top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 600);
    });


});
// audio reading script
let audioPlayed = false;
let audioMuted = false;
let player = document.getElementById('audio-reader');
let readingText = document.getElementsByClassName('word');
let textToRead = document.getElementById('text-to-read');
textToRead.onclick = readingTextHandler;
player.onended = function () {
    document.getElementsByClassName('sound-on')[0].style.display = 'block';
    document.getElementsByClassName('sound-off')[0].style.display = 'none';
};
function readingTextHandler () {
    if (audioPlayed === false) {
        document.getElementsByClassName('sound-on')[0].style.display = 'none';
        document.getElementsByClassName('sound-off')[0].style.display = 'block';
        for (let iterInd = 0; iterInd < readingText.length; iterInd++) {
            readingText[iterInd].classList.add('word' + iterInd);
            readingText[iterInd].classList.add('hidden-word');
        }
        setTimeout(function () {
            player.play();
            audioPlayed = true;
            setTimeout(function () {
                showHiddenWord('word0', 850);
                showHiddenWord('word1', 1350);
                showHiddenWord('word2', 1850);
                showHiddenWord('word3', 2600);
                showHiddenWord('word4', 3300);
                showHiddenWord('word5', 3800);
                showHiddenWord('word6', 4700);
                showHiddenWord('word7', 6900);
                showHiddenWord('word8', 7400);
                showHiddenWord('word9', 7900);
                showHiddenWord('word10', 8300);
                showHiddenWord('word11', 8800);
                showHiddenWord('word12', 9200);
                showHiddenWord('word13', 10200);
                showHiddenWord('word14', 10800);
                showHiddenWord('word15', 11200);
                showHiddenWord('word16', 12300);
                showHiddenWord('word17', 12900);
                showHiddenWord('word18', 13400);
                showHiddenWord('word19', 14000);
                showHiddenWord('word20', 15000);
                showHiddenWord('word21', 15500);
                showHiddenWord('word22', 16200);
            }, 150);
        }, 150);
    }
    else {
        if (player.ended) {
            audioPlayed = false;
            audioMuted = true;
            for (let iterInd = 0; iterInd < readingText.length; iterInd++) {
                readingText[iterInd].classList.remove('shown-word');
            }
            setTimeout(readingTextHandler(), 50);
        }
        if (audioMuted === false) {
            player.volume = 0;
            audioMuted = true;
            document.getElementsByClassName('sound-on')[0].style.display = 'block';
            document.getElementsByClassName('sound-off')[0].style.display = 'none';
        }
        else {
            player.volume = 1;
            audioMuted = false;
            document.getElementsByClassName('sound-on')[0].style.display = 'none';
            document.getElementsByClassName('sound-off')[0].style.display = 'block';
        }
    }
}
function showHiddenWord(name, timeout) {
    setTimeout(function () {
        let word = document.getElementsByClassName(name)[0];
        word.classList.add('shown-word');
        word.classList.remove('hidden-word');
    }, timeout);
}
// audio JS ends