import Vue from 'vue'
import Vuex, { type StoreOptions } from 'vuex'
import { articleApi } from '@/shared/api/articles'
import type { Article } from '@/shared-kernel'

Vue.use(Vuex)

// Add types
export type StateRoot = {
    modules: {
        articles: {
            list: Article[]
            active: null
        }
    }
}

const store: StoreOptions<StateRoot> = {
    modules: {
        articles: {
            namespaced: true,
            state: () => ({
                list: [],
                active: null,
            }),
            getters: {
                list(state) {
                    return state.list
                },
                active(state) {
                    return state.active
                },
            },
            mutations: {
                updateList(state, list) {
                    state.list = list
                },
                updateActive(state, active) {
                    state.active = active
                },
            },
            actions: {
                async fetch({ commit }) {
                    try {
                        const {
                            articles: { data },
                        } = await articleApi.getArticles()

                        commit('updateList', data)
                    } catch (error) {
                        console.error(error)
                    }
                },
                async fetchItem({ commit }, id) {
                    const { article } = await articleApi.getArticle(id)

                    commit('updateActive', article)
                },
            },
        },
    },
}

export default new Vuex.Store<StateRoot>(store)
