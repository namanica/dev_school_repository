class Warrior {
    constructor(warrior_level, warrior_ranks, warrior_experience, warrior_achievements) {
        this.warrior_level = 1;
        this.warrior_ranks = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"];
        this.warrior_experience = 100;
        this.warrior_achievements = [];
    }
    level() {
        this.warrior_level = Math.floor(this.warrior_experience / 100);
        if (this.warrior_level > 100) this.warrior_level = 100;
        return this.warrior_level;
    }
    experience() {
        if (this.warrior_experience > 10000) {
            this.warrior_experience = 10000;
        }
        return this.warrior_experience;
    }
    rank() {
        return this.warrior_ranks[Math.floor(this.warrior_level / 10)];
    }
    achievements() {
        return this.warrior_achievements;
    }
    battle(enemy_level) {
        if (enemy_level <= 0 || enemy_level > 100) return "Invalid level";
        if (enemy_level + 2 <= this.warrior_level) return "Easy fight";
        if (enemy_level == this.warrior_level) {
            this.warrior_experience += 10;
            this.update();
            return "A good fight";
        }
        if (enemy_level + 1 == this.warrior_level) {
            this.warrior_experience += 5;
            this.update();
            return "A good fight";
        }
        if (Math.floor((this.warrior_level - 1) / 10) < Math.floor(enemy_level/ 10) && enemy_level >= this.warrior_level + 5) return "You've been defeated";
        if (enemy_level > this.warrior_level) {
            let diff = enemy_level - this.warrior_level;
            this.warrior_experience += 20*diff**2;
            this.update();
            return "An intense fight";
        }
    }
    training(event) {
        let [tr_des, tr_exp, min_lvl] = event;
        if (this.warrior_level >= min_lvl) {
            this.warrior_achievements.push(tr_des);
            this.warrior_experience += tr_exp;
            this.update();
            return tr_des;
        }
        else return "Not strong enough";
    }
    update() {
        this.experience();
        this.level();
        this.rank();
    }
}
