---
layout: post
title: Decoding 'Almost Flask'
categories: 
---

I started using Github almost immediately after I began programming seriously in Java, after moving on from Scratch[^1].
That means I started using Java around 6 years ago, when I was 13 years old.
It is really interesting to see code from that period.
The quality is surprisingly good, and I appear to have had a decent grasp of Java.

A bit later, [around three years ago][almost_flask commit], I thought it would be fun to do [almost-sinatra](https://github.com/rkh/almost-sinatra) for Python.
I implemented small bits of flask in around 5 lines, and learned quite a bit from it.
The proportion of flask implemented is much smaller than almost-sinatra did for sinatra
-- I didn't use any HTTP server framework, so I had to reimplement quite a lot.

Here is the source in its full glory:

```python
from http.server import*;from http.cookies import*;from re import*;from urllib.parse import*;from uuid import*
N,m,n,c,o=None,[],{},lambda n,d={}:type(n,(object,),d),'GET POST PUT DELETE'.split()
def h(s):C=SimpleCookie();C.load(s.headers.get('Cookie',N)or{});S=C.get('s');S=S.value if S else uuid4().hex;i.clear();i.update(n.get(S,{}));a=urlparse(s.path);p,c=r.path,r.method=unquote(a.path),s.command;r.args=dict(parse_qsl(a.query));u,e,f=([(u.match(p).groupdict(),e,f) for u,e,f in m if u.match(p)]+[({},o,lambda:'404')])[0];t=f(**u)if c in e else '405';s.send_response(200+204*(t=='404')+205*(t=='405'));s.send_header('Content-type','text/html');s.send_header('Set-Cookie','s='+S);s.end_headers();s.wfile.write(t.encode());n[S]=i.copy()
R,Flask=type('R',(BaseHTTPRequestHandler,),{'do_'+t:h for t in o}),c('Flask',dict(__init__=lambda s,n:N,route=lambda s,u,methods=['GET']:lambda f:m.append((compile('^%s$'%sub('(<[^>]*>)','(?P\\1[^/]+)',u)),methods,f)),run=lambda s,b=('127.0.0.1',5000):print('* Running on http://%s:%d/'%b)/HTTPServer(b, R).serve_forever()))
session,request=i,r={},c('')()
```

I thought it would be an interesting exercise to try to decode what this does again, and what tricks I might have used.

The first thing is that the code is minified. That's not too interesting, so let's just expand it:

```python
from http.server import *
from http.cookies import *
from re import *
from urllib.parse import *
from uuid import *
N=None
m=[]
n={}
c=lambda n,d={}:type(n,(object,),d)
o='GET POST PUT DELETE'.split()
def h(s):
    C=SimpleCookie()
    C.load(s.headers.get('Cookie',N)or{})
    S=C.get('s')
    S=S.value if S else uuid4().hex
    i.clear()
    i.update(n.get(S,{}))
    a=urlparse(s.path)
    p,c=r.path,r.method=unquote(a.path),s.command
    r.args=dict(parse_qsl(a.query))
    u,e,f=([(u.match(p).groupdict(),e,f) for u,e,f in m if u.match(p)]+[({},o,lambda:'404')])[0]
    t=f(**u)if c in e else '405'
    s.send_response(200+204*(t=='404')+205*(t=='405'))
    s.send_header('Content-type','text/html')
    s.send_header('Set-Cookie','s='+S)
    s.end_headers()
    s.wfile.write(t.encode())
    n[S]=i.copy()
R=type('R',(BaseHTTPRequestHandler,),{'do_'+t:h for t in o})
Flask=c('Flask',dict(
    __init__=lambda s,n:N,
    route=lambda s,u,methods=['GET']:lambda f:m.append((compile('^%s$'%sub('(<[^>]*>)','(?P\\1[^/]+)',u)),methods,f)),
    run=lambda s,b=('127.0.0.1',5000):print('* Running on http://%s:%d/'%b)/HTTPServer(b, R).serve_forever())
)
session=i={}
request=r=c('')()
```

[^1]: [Scratch](https://scratch.mit.edu) is some amazing software I used when I was younger
(follow me [\@Greatdane](https://scratch.mit.edu/users/Greatdane/) 😊). So I could say I started programming when I was around 8, but I'm not sure if Scratch counts as programming.
I did eventually start building systems that had pluggable components that talked to each other, including "operating systems" that
managed user-installed programs.

[almost_flask commit]: https://github.com/maxov/almost_flask/commit/c197c31427a67fca9cccb58c453e125cd3ee3241