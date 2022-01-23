(ns dev.views
  (:require
   ["react-native" :as rn]
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

(defn display-user [{:keys [id avatar email] first-name :first_name}]
   [:> rn/Text  first-name " " email])

(defn root []
  (let [name (rf/subscribe [::subs/name])
        loading (rf/subscribe [::subs/loading])
        users (rf/subscribe [::subs/users])]
    [:> rn/View {:style (.-container styles)}
     [:> rn/Text {:style (.-title styles)} "Hello: " @name]
     (when @loading [:> rn/Text "loading..."])
     (map display-user @users)
     [:> rn/Button {:on-press #(rf/dispatch [::events/fetch-users]) :title "Make API Call"}]
     [:> rn/Button {:title "update name!" :on-press #(rf/dispatch [::events/update-name "🥳"])}]]))
