// Returns a random number to select an array's index depending on array's length.
const randNumber = (number) => {
    return Math.floor(Math.random() * number);
  };

// Store phrases as arrays in an object.
const fortuneRepository = {
    goodFortune: ['An exciting opportunity lies ahead of you.', 'You will always be surrounded by true friends.', 
    'You should be able to undertake and complete anything.', 'Respect yourself and others will respect you.', 
    'Your life will be happy and peaceful.', 'The one you love is closer than you think.', 'Soon you will be sitting on top of the world.', 
    'You will be rewarded for your efforts within the month.', 'A new work opportunity will avail itself.', 'Doors will open for you in many areas of your life.'],
    badFortune: ['You will die alone and poorly dressed.', 'Today is not your day.', 'You will die of a heart attack.', 'Enjoy yourself while you can', 
    'You have an illness you ought to check as soon as you can.', 'You will learn a lesson today.', 'Something unexpected will disrupt your day.', 
    'You laugh now, wait until you get home.', 'You may have forgotten something.', 'The fact that others are bad does not imply you are good.'],
    advForGoodFortune: ['take time to know yourself.', 'not make assumptions.', 'be patient and persistent.', 'trust your instincts.', 'not be afraid, take the first step now.'],
    advForBadFortune: ['know when to walk away.', 'avoid confrontation.', 'not leave your house.', 'learn that you do not always get what you want.', 'use adversity as an opportunity.'],
    luckyNumber() {
        return Math.ceil(Math.random() * 99);
    },
    checkFortune() {
        const coinToss = Math.floor(Math.random() * 1);
        
        if (coinToss === 1) {
            let randSelect = randNumber(this.goodFortune.length);
            let goodOne = this.goodFortune[randSelect];
            return goodOne;
        } else {
            let randSelect = randNumber(this.badFortune.length);
            let badOne = this.badFortune[randSelect];
            return badOne;
        };
    },
    giveAdvice() {
        const yourLuck = this.checkFortune();

        if (yourLuck === this.goodOne) {
            let randSelect = randNumber(this.advForGoodFortune.length);
            let advice = this.advForGoodFortune[randSelect];
            return advice;
        } else {
            let randSelect = randNumber(this.advForBadFortune.length);
            let advice = this.advForBadFortune[randSelect];
            return advice;
        };        
    }
};


