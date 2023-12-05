import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ArticleService } from './article.service';

describe('ArticleService', () => {
    let service: ArticleService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ArticleService]
        });

        service = TestBed.inject(ArticleService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify(); // Vérifiez qu'il n'y a pas de demandes HTTP en attente après chaque test.
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should retrieve all articles', () => {
        const mockArticles = [
            { id: '1', title: 'Article 1', content: 'Contenu de l\'article 1' },
            { id: '2', title: 'Article 2', content: 'Contenu de l\'article 2' },
        ];

        service.getAllArticles().subscribe((articles) => {
            expect(articles).toEqual(mockArticles);
        });

        const req = httpMock.expectOne('http://localhost:3001/api/articles');
        expect(req.request.method).toBe('GET');
        req.flush(mockArticles);
    });

    it('should retrieve an article by ID', () => {
        const mockArticleId = '123';
        const mockArticle = {
            // mock article data
            // ...
        };

        service.getArticleById(mockArticleId).subscribe((article) => {
            expect(article).toEqual(mockArticle);
        });

        const req = httpMock.expectOne(`http://localhost:3001/api/articles/${mockArticleId}`);
        expect(req.request.method).toBe('GET');
        req.flush(mockArticle);
    });

    // Add more tests for other service methods as needed
});
