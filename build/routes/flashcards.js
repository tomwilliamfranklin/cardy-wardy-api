"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var flashcardsIndex = router.get('/', function (req, res, next) {
    // TODO hardcoded data 
    var flashcards = [{
            title: 'Capitals of Europe',
            description: 'Revision for capitals of europe',
            dateCreated: new Date(),
            dateLastUpdated: new Date(),
            public: true,
            flashcards: [
                {
                    front: 'Capital of England',
                    back: 'London',
                    flipped: false,
                },
                {
                    front: 'Capital of Spain',
                    back: 'Madrid',
                    flipped: false,
                },
                {
                    front: 'Capital of Italy',
                    back: 'Rome',
                    flipped: false,
                },
            ],
        },
        {
            title: 'Types of Wood',
            description: 'Revision for my tree exam',
            dateCreated: new Date(),
            dateLastUpdated: new Date(),
            public: true,
            flashcards: [
                {
                    front: 'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.',
                    back: 'Oak',
                    flipped: false,
                },
                {
                    front: 'some question about wood facts, once again, i know nothing',
                    back: 'Wood is used to make high quality benches',
                    flipped: false,
                },
            ],
        },
        {
            title: 'Game Consoles',
            description: 'Revision for game consoles Revision for game consoles Revision for game consoles Revision for game consoles Revision for game consoles Revision for game consoles Revision for game consoles Revision for game consoles Revision for game consoles Revision for game consoles Revision for game consoles Revision for game consoles Revision for game consoles Revision for game consoles Revision for game consoles Revision for game consoles Revision for game consoles Revision for game consoles Revision for game consoles Revision for game consoles Revision for game consoles Revision for game consoles Revision for game consoles Revision for game consoles Revision for game consoles Revision for game consoles Revision for game consoles Revision for game consoles Revision for game consoles Revision for game consoles Revision for game consoles Revision for game consoles ',
            dateCreated: new Date(),
            dateLastUpdated: new Date(),
            public: true,
            flashcards: [
                {
                    front: 'First Microsoft Console',
                    back: 'Xbox',
                    flipped: false,
                },
                {
                    front: 'First ever commerical game console?',
                    back: 'Pong',
                    flipped: false,
                },
                {
                    front: 'First Nintendo Console?',
                    back: 'NES',
                    flipped: false,
                },
                {
                    front: 'First Saga Console?',
                    back: 'idk and cba to google it ',
                    flipped: false,
                },
            ],
        },
        {
            title: 'European Empires',
            description: 'Revision for my european history exam!!',
            dateCreated: new Date(),
            dateLastUpdated: new Date(),
            public: true,
            flashcards: [
                {
                    front: 'The sun never sets on the _',
                    back: 'British Empire',
                    flipped: false,
                },
                {
                    front: 'Viva La Revolution?',
                    back: 'Revolutionary France',
                    flipped: false,
                },
                {
                    front: 'The union of Austria, Hungary, Croatia and a few other places',
                    back: 'Austria-Hungary',
                    flipped: false,
                },
            ],
        },
        {
            title: 'European Empires',
            description: 'Revision for my european history exam!!',
            dateCreated: new Date(),
            dateLastUpdated: new Date(),
            public: true,
            flashcards: [
                {
                    front: 'The sun never sets on the _',
                    back: 'British Empire',
                    flipped: false,
                },
                {
                    front: 'Viva La Revolution?',
                    back: 'Revolutionary France',
                    flipped: false,
                },
                {
                    front: 'The union of Austria, Hungary, Croatia and a few other places',
                    back: 'Austria-Hungary',
                    flipped: false,
                },
            ],
        },
        {
            title: 'Game Consoles',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex',
            dateCreated: new Date(),
            dateLastUpdated: new Date(),
            public: true,
            flashcards: [
                {
                    front: 'First Microsoft Console',
                    back: 'Xbox',
                    flipped: false,
                },
                {
                    front: 'First ever commerical game console?',
                    back: 'Pong',
                    flipped: false,
                },
                {
                    front: 'First Nintendo Console?',
                    back: 'NES',
                    flipped: false,
                },
            ],
        },
        {
            title: 'European Empires',
            description: 'Revision for my european history exam!!',
            dateCreated: new Date(),
            dateLastUpdated: new Date(),
            public: true,
            flashcards: [
                {
                    front: 'The sun never sets on the _',
                    back: 'British Empire',
                    flipped: false,
                },
                {
                    front: 'Viva La Revolution?',
                    back: 'Revolutionary France',
                    flipped: false,
                },
                {
                    front: 'The union of Austria, Hungary, Croatia and a few other places',
                    back: 'Austria-Hungary',
                    flipped: false,
                },
            ],
        },
        {
            title: 'Types of Wood',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,',
            dateCreated: new Date(),
            dateLastUpdated: new Date(),
            public: true,
            flashcards: [
                {
                    front: 'some wood question, idk anything about wood',
                    back: 'Oak',
                    flipped: false,
                },
                {
                    front: 'some question about wood facts, once again, i know nothing',
                    back: 'Wood is used to make high quality benches',
                    flipped: false,
                },
            ],
        },
        {
            title: 'Types of Keyboards',
            description: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth',
            dateCreated: new Date(),
            dateLastUpdated: new Date(),
            public: true,
            flashcards: [
                {
                    front: 'some wood question, idk anything about wood',
                    back: 'Oak',
                    flipped: false,
                },
                {
                    front: 'some question about wood facts, once again, i know nothing',
                    back: 'Wood is used to make high quality benches',
                    flipped: false,
                },
            ],
        },
        {
            title: 'Solar System',
            description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
            dateCreated: new Date(),
            dateLastUpdated: new Date(),
            public: true,
            flashcards: [
                {
                    front: 'some wood question, idk anything about wood',
                    back: 'Oak',
                    flipped: false,
                },
                {
                    front: 'some question about wood facts, once again, i know nothing',
                    back: 'Wood is used to make high quality benches',
                    flipped: false,
                },
            ],
        }];
    res.send(flashcards);
});
exports.default = { flashcardsIndex: flashcardsIndex };
