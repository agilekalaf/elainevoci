/**
 * Created by gjbelang on 3/7/14.
 */
evApp.controller('SimpleController',function ($scope, $http) {
    $scope.quotes = ["Lord, make me an instrument of Thy peace, a reflection of your Holy Love and a channel of your Healing Grace. -- St Francis of Assisi", "The Forgiveness Blessing -- I give you to God that I may be healed. I give you to God that I may have peace. I give you to God that we may both be healed together. -- from The Way of Forgiveness by Heartland Miracles, LLC", "Someday, after mastering the winds, the waves, the tides and gravity, we shall harness for God the energies of love and then, for the second time in the history of the world, humans will have discovered fire. -- Pierre Teilhard de Chardin.", "You matter because you are, and you matter to the last moment of your life. -- Dame Cicily Saunders, founder of hospice movement", "When you find peace within yourself, you become the kind of person who can live at peace with others. -- Peace Pilgrim", "Life is an exciting business and most exciting when lived for others. I am a pencil in the hand of God. -- Mother Teresa", "You have to do what you love to do, not get stuck in that comfort zone of a regular job. Life is not a dress rehearsal. This is it. -- Lucinda Basset", "To be tested is good. The challenged life may be the best therapist. -- Gail Sheehy, author", "People are like stained glass windows. They sparkle and shine when the sun is out, but when the darkness sets in their true beauty is revealed only if there is a light from within. -- Elisabeth Kubler-Ross", "We need to find the courage to say no to the things and people that are not serving us if we want to rediscover ourselves and live our lives with authenticity. -- Barbara De Angelis", "There is a vitality, a life force, an energy, a quickening that is translated through you into action. And because there is only one of you in all of time, this expression is unique. And if you block it, it will never exist through any other medium and be lost. -- Martha Graham", "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say: I used everything you gave me. -- Erma Bombeck", "When you were born, you cried and the world rejoiced. Live your life in such a manner that when you die, the world cries and you rejoice. -- Indian mother's lullaby", "The melody that the loved one played upon the piano of your life will never be played quite that way again, but we must not close the keyboard and allow the instrument to gather dust. We must seek out other artists of the spirit, new friends who gradually will help us to find the road to life again, who will walk that road with us. -- Rabbi Joshua Loth, in Peace of Mind", "Use me God, show me how to take who I am, who I want to be and what I can do, and use it for a purpose greater than myself."];
    $scope.quoteIndex = Math.floor(Math.random() * ($scope.quotes.length));
    $scope.qotd = $scope.quotes[$scope.quoteIndex];
});
