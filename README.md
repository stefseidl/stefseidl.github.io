# stefseidl.github.io
My webspace

I am going to use this webspace in my "HOME" students project as an opportunity to display data generated with my Raspberry Pi B3+.

Automatically push an updated file:

git config credential.helper store
inotifywait -q -m -e CLOSE_WRITE --format="git commit -m 'auto commit' %w && git push origin master" index.html | bash
