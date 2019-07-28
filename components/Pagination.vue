<template>
  <section class="pagination">
    <button class="pagination-left" @click="prevPage">previous</button>

    <ul>
        <li v-if="hasFirst()">
            <button @click="changeCurrentPage(1)" :class="{ current: currentPage == 1}">1</button>
        </li>
        <li v-if="hasFirst()">...</li>

        <li v-for="page in pages" :key="page._id">
            <button @click.stop.prevent="changeCurrentPage(page)" :class="{ current: currentPage == page}">{{ page }}</button>
        </li>

        <li v-if="hasLast()">...</li>
        <li v-if="hasLast()">
            <button @click="changeCurrentPage(summaryPages)" :class="{ current: currentPage == summaryPages}">{{ summaryPages }}</button>
        </li>
    </ul>

    <button class="pagination-right" @click="nextPage">next</button>
  </section>
</template>

<script>

export default {
    data() {
        return {
            currentPage: 1,
            pageRange: 1
        }  
    },
    computed: {
        offset() {
            return this.$store.state.pokemonList.offset;
        },

		totalPokemons() {
            return this.$store.state.pokemonList.totalPokemons;
        },

        limitPokemons() {
            return this.$store.state.pokemonList.limitOfPokemons;
        },

        summaryPages() {
            return Math.ceil(this.totalPokemons/this.limitPokemons);
        },

        rangeStart() {
            const start =  this.currentPage - this.pageRange;
            if (start > 0) {
                return start;
            } else {
                return 1;
            }
        },

        rangeEnd() {
            const end =  this.currentPage + this.pageRange;
            if (end < this.summaryPages) {
                return end;
            } else {
                return 1;
            }
        },

        pages() {
            const pages = [];
            
            for (let i = this.rangeStart; i <= this.rangeEnd; i++) {
                pages.push(i);
            }

            return pages;
        }
    },
    
    methods: {

        nextPage() {
            this.currentPage = this.currentPage + 1;
            this.changePage();
        },

        prevPage() {

            if(this.currentPage > 1) {
                this.currentPage = this.currentPage - 1;
            }

            this.changePage();
        },

        changeCurrentPage(page) {
            this.currentPage = page;
            this.changePage();
            
        },

        changePage() {
            this.$store.commit('pokemonList/changeCurrentPage', this.currentPage);
        },

        hasFirst() {
            return this.rangeStart !== 1;
        },

        hasLast() {
            return this.rangeEnd < this.summaryPages;
        }
    }
}
</script>


<style scoped lang="scss">

    .pagination {
        padding-top: 30px;
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        align-items: center;

        &-left, &-right {
            width: 80px;
        }

        button {
            box-shadow: 0px 10px 14px -7px #fac800;
            background:linear-gradient(to bottom, #fcd40d 5%, #bd6a04 100%);
            border-radius:4px;
            border:1px solid #c2a654;
            cursor:pointer;
            color:#ffffff;
            font-size:13px;
            font-weight:bold;
            padding:10px 10px;
            margin: 0 5px;
            text-shadow:0px 1px 0px #ff8503;

            &:hover {
                background:linear-gradient(to bottom, #bd6a04 5%, #fcd40d 100%);
            }

            &:active {
                position:relative;
                top:1px;
            }
        }


        li {
            list-style-type: none;
            line-height: 50px;
            text-align: center;
            vertical-align: text-bottom;
            width: 50px;
            height: 50px;

            button {
                width: 100%;
                height: 100%;
            }
        }
        
        ul {
            margin-left: 0; 
            padding-left: 0; 
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
    }
</style>