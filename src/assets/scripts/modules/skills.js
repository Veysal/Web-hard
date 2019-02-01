import Vue from 'vue';

const skill = {
    props: {
        skillTitle: String,
        skillPercentage: Number
    },
    methods: {
        drawCircleDependsOnPercentage() {
            const circle = this.$refs['circle'];
            const percent = -this.skillPercentage;

            circle.style.animationDelay = `${percent}s`;
        }
    },
    mounted() {
        this.drawCircleDependsOnPercentage();
    },
    template: "#skill"
};

const skillsItem = {
    components: {
        skill
    },
    props: {
        skills: Object
    },
    template: "#skills-item",
};


const skillsList = {
    components: {
        skillsItem
    },
    props: {
        skillsData: Array
    },
    template: "#skills-list"
};

new Vue({
    el: "#skills-component",
    components: {
        skillsList
    },
    data() {
        return {
            skills: []
        }
    },
    created() {
        this.skills = require('../../../data/skills.json');
    },
    template: "#skills-container"
});



