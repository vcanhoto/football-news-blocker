class Matcher {
    keywords: string[] = ['FUTEBOL', 'CRÓNICA DE JOGO'];
    matches: RegExp = /(FUTEBOL)|(CRÓNICA DE JOGO)/;
    posts: HTMLElement[];

    constructor(posts: HTMLElement[]) {
        this.posts = posts;
    }

    hideMatches() {
        for (let post of posts) {
            if (post.innerText.search(this.matches) > -1) {
                (<HTMLElement>post.closest('.stack__slice__item')).style.cssText = 'display: none';
            }
        }
    }
}

let posts: HTMLElement[] = [...document.querySelectorAll<HTMLElement>('.tag--desporto')];

let matcher = new Matcher(posts);
matcher.hideMatches();