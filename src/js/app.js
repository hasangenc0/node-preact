import React, { Component } from 'react';
import { render } from 'react-dom';
import 'preact/devtools';
import Navigation from './navigation';

class App extends Component {

    render() {
        let { a, b, children } = this.props;
        return (
            <div>
            <Navigation></Navigation>
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Hasan's Preact Express Template</div>
                    <p class="text-grey-darker text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div class="px-6 py-4">
                    <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#preact</span>
                    <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#express</span>
                    <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">#tailwind</span>
                </div>
            </div>
        );
    }
}

render((
    <App app="app">Start With Hasan's Preact Template</App>
), document.getElementById("app"));