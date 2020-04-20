<template>
    <div class=" v-btn-toggle v-btn-toggle--borderless v-btn-toggle--dense">
        <button v-for="(button, index) in buttons"
            class="v-btn theme--light v-size--default"
            @click="buttonClicked(index)"
            :class="{ 'v-btn--active': (activeIndex == index) }">
            {{ button }}
        </button>
    </div>
</template>

<script>
export default {
    props: {
        buttons: {
            type: Array,
            default: function() {
                return [
                    'First',
                    'Second',
                    'Last'
                ]
            }
        }
    },
    data: function () {
        return {
            activeIndex: 0
        }
    },
    created: function() {
        this.activeIndex = 0;
        this.$emit('activeIndex', this.activeIndex)
    },
    methods: {
        buttonClicked: function(index) {
            this.activeIndex = index;
            // console.log(this.activeIndex)
            this.$emit('activeIndex', this.activeIndex)
        }
    }
}
</script>

<style scoped>

.v-btn:hover {
    color: white;
    background-color: #899596;
    opacity: 100;
}

.item-group {
    flex: 0 1 auto;
    position: relative;
    max-width: 100%;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}

.v-btn-toggle {
    border-radius: 4px;
    display: inline-flex;
    max-width: 100%;
}
.v-item-group {
    flex: 0 1 auto;
    position: relative;
    max-width: 100%;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}
* {
    background-repeat: no-repeat;
    padding: 0;
    margin: 0;
}
*, ::before, ::after {
    box-sizing: inherit;
}
div {
    display: block;
}


.v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default {
    height: 48px;
    min-height: 0;
    min-width: 48px;
}

.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn {
    border-color: rgba(0, 0, 0, 0.12) !important;
}
/* .theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
    background-color: #f5f5f5;
} */
.v-btn-toggle > .v-btn.v-btn:first-child {
    border-top-left-radius: inherit;
    /* border-bottom-left-radius: inherit; */
}
.v-btn-toggle > .v-btn.v-btn:last-child {
    border-top-right-radius: inherit;
    /* border-bottom-right-radius: inherit; */
}

/* Toggels color when button active */
.v-btn-toggle > .v-btn.v-btn--active {
    color: white;
    background-color: #006064;
    opacity: 1;
}

.v-btn-toggle > .v-btn.v-btn {
    border-radius: 0;
    border-style: solid;
    border-width: thin;
    box-shadow: none;
    box-shadow: none;
    opacity: 0.8;
    padding: 0 12px;
}
.v-btn.v-size--default {
    height: 36px;
    /* min-width: 64px; */
    padding: 0 16px;
} 

@media (max-width: 868px) {
    .v-btn.v-size--default {
        font-size: 12px;
    }
}
@media (min-width: 868px) {
    .v-btn.v-size--default {
        min-width: 64px;
    }
}

.v-btn--contained {
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
.v-btn {
    align-items: center;
    /* border-radius: 4px; */
    display: inline-flex;
    flex: 0 0 auto;
    font-weight: 500;
    letter-spacing: 0.0892857143em;
    justify-content: center;
    outline: 0;
    position: relative;
    text-decoration: none;
    text-indent: 0.0892857143em;
    text-transform: uppercase;
    transition-duration: 0.28s;
    transition-property: box-shadow, transform, opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
}

button {
    font: inherit;
    cursor: pointer;
}

</style>
