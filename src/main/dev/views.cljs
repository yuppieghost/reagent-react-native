(ns dev.views
  (:require
   ["react-native" :as rn]
   [reagent.core :as r]
   ["@react-navigation/native" :refer [NavigationContainer]]
   ["@react-navigation/stack" :refer [createStackNavigator]]
   ["react-native-safe-area-context" :refer [SafeAreaProvider SafeAreaView]]
   [re-frame.core :as rf]
   [dev.events :as events]
   [dev.subs :as subs]))


(def styles
  ^js (-> {:container
           {:flex 1
            :backgroundColor "#fff"
            :alignItems "center"
            :justifyContent "center"}
           :title
           {:fontWeight "bold"
            :fontSize 24
            :color "blue"}}
          (clj->js)
          (rn/StyleSheet.create)))

;; (defn display-user [{:keys [id avatar email] first-name :first_name}]
;;    [:> rn/FlatList {:data }  first-name " " email])

;; (defn display-user [users]
;;    [:> rn/FlatList {:data users :render-item todo}]
;;   )

(defn todo [meta-obj]
  (let [item (.-item meta-obj)]
    (r/as-element

     [:> rn/Text (.-name item)])))

(defn todo-list []
  [:> rn/FlatList {:data [{:id "1" :name "foo"}
                          {:id "2" :name "bar"}]
                   :render-item todo}])


;; (defn main-stack []
;;   (let [stack (createStackNavigator)]
;;     [:> (.-Navigator stack) {:headerMode "none"}
;;      [:> (.-Screen stack) {:name "Welcome" :component (r/reactify-component welcome-stack)}]
;;      [:> (.-Screen stack) {:name "Tab" :component (r/reactify-component tab-stack)}]]))

(defn welcome-view [props]
  (let [{:keys [navigation]} props]
    [:> rn/View {:style (.-container styles)}
     [:> rn/Button {:title "Go to Details" :onPress #(.navigate navigation "Details")}]
     [:> rn/Text "hello"]]))

(defn detail-view[props]
  (let [{:keys [navigation]} props]
    [:> rn/View {:style (.-container styles)}
     [:> rn/Button {:title "Go to Details" :onPress #(.push navigation "Details")}]
     [:> rn/Button {:title "Go Back" :onPress #(.goBack navigation)}]
     [:> rn/Button {:title "Go To TOP of the stack" :onPress #(.popToTop navigation)}]
     [:> rn/Text "detail screen"]]))

(defn root []
  (let [stack (createStackNavigator)]
    [:> NavigationContainer
     [:> (.-Navigator stack)
      [:> (.-Screen stack) {:name "Welcome" :component (r/reactify-component welcome-view)
                            :option {:title "world"}}]
      [:> (.-Screen stack) {:name "Details" :component (r/reactify-component detail-view)}]]]))

(defn main-stack []
  (let [name (rf/subscribe [::subs/name])
        loading (rf/subscribe [::subs/loading])
        users (rf/subscribe [::subs/users])]
    [:> rn/View {:style (.-container styles)}
     [:> rn/Text {:style (.-title styles)} "Hello: " @name]
     (when @loading [:> rn/Text "loading..."])
    ;;  (todo-list)
    ;;  (display-user @users)
     [:> rn/Button {:on-press #(rf/dispatch [::events/fetch-users]) :title "Make API Call"}]
     [:> rn/Button {:title "update name!" :on-press #(rf/dispatch [::events/update-name "🥳"])}]]))
