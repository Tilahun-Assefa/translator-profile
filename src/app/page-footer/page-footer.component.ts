import { Component } from '@angular/core';

@Component({
    selector: 'app-page-footer',
    imports: [],
    template: `
    <footer class="py-2 bg-dark fixed-bottom">
    <ul class="container px-5">
        <li><p class="m-0 text-center text-white">Copyright &copy; Translation Hub 2024</p></li>
        <li><a style="float:right" href="/testimonial" class="nav-link">Give Feedback</a></li>
    </ul>
</footer>
  `,
    styles: ``
})
export class PageFooterComponent {

}
