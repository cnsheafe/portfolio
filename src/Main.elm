module Main exposing (init, main, update, view)

import Browser
import Html exposing (Html, br, button, div, h1, text)
import Html.Events exposing (onClick)


main =
    Browser.sandbox { init = init, update = update, view = view }


type alias Model =
    Int


init : Model
init =
    0


type Msg
    = Increment
    | Decrement


update : Msg -> Model -> Model
update msg model =
    case msg of
        Increment ->
            model + 1

        Decrement ->
            model - 1


view : Model -> Html Msg
view model =
    Html.h1 []
        [ text "Hi, I'm Chris!\n"
        , br [] []
        , text "Frontend Web Developer."
        , br [] []
        , text "React & Typescript Nerd."
        , br [] []
        , text "Current Obsession: Clojure & Elm."
        ]
