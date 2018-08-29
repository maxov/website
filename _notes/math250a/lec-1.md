---
layout: note
title: "Math 250A Lecture 1: Administrivia, Categories"
date: 2018-08-23
class: math250a
author: Max Ovsiankin
lecturer: David Nadler
---

# Administriva
- [Math 250A: Groups, Rings, and Fields](https://math.berkeley.edu/~nadler/250afall2018)
- Instructor: [David Nadler](https://math.berkeley.edu/~nadler/)
- Will conduct class like a "very" advanced undergraduate class, including an (in-class) midterm and final
    - Suggested exercies on course website. No GSI yet, no grading
- No office hours yet
- Lang's algebra is a guide
- Class is going to be very much like 113. Hope to find sweet spot between "enriched 113" and completely novel
- Umbrella: Groups, Rings, Fields, Modules, focus on noncommutative
- cat $\to$ groups $\to$ rings $\to$ galois $\to$ representation theory

Some life advice: a trait of good scientists is that they always look for new facets in what they already know.
Nadler gets this through teaching.

# Category Theory

Categories are immensely useful and generalizable objects.
The reason we do category theory is that it helps us organize a lot of disparate phenomena among the algebraic objects
that we already know and love.

Note that we talk about collections in the definition of a category. This is not formally defined, and we can talk about
the required set theory, but it's not important to understand the point of categories.

<div class="box">

__Definition.__ A _category_ $\mathscr{C}$ consists of:

- A collection of objects formally denoted $\text{Ob} \ \mathscr{C}$, informally just $\mathscr{C}$
- For any $x, y \in \mathscr{C}$, a set of _morphisms_ (also called _arrows_) $\text{Hom}_\mathscr{C}(x, y) = \mathscr{C}(x, y)$
- For any $x, y, z \in \mathscr{C}$, composition of morphisms:

$$\text{Hom}_\mathscr{C}(y, z) \times \text{Hom}_\mathscr{C}(x, y) \to \text{Hom}_\mathscr{C}(x, z)$$
$$ (g, f) \mapsto g \circ f$$

Such that:

1. Composition of arrows is associative (add diagram): $h \circ (g \circ f) = (h \circ g) \circ f$
2. There exist identity morphisms $e_x \in \text{Hom}_\mathscr{C}(x, x)$ so that $e_x \circ g = g, f \circ e_x = f$

</div>

Categories were invented in the 1950s for algebraic topology. Categories are so pervasive that today they seem fundamental to lots of math.

__Examples__

- $\mathscr{C} = \text{Set}$: Objects are sets, Homs are set maps, compositions are function composition
- $\mathscr{C} = \text{Finset}$, finite sets
- $\mathscr{C} = \text{Top}$, topological spaces and continuous maps
- $\mathscr{C} = \text{Grp}, \text{AbGrp}$ groups and abelian groups
- $\mathscr{C} = \text{Ring}, \text{CommRings}$, rings and commutative rings

The structure of each category should be evident "culturally", based on what kind of morphisms help us classify
objects within the category.

__Example.__ Suppose $\mathscr{C}$ has a single object $x$. (diagram)
Then there exists some identity morphism $id_x$, and all other morphisms compose with each other with associativity.
It turns out this kind of structure has a name, a monoid, with $M = \text{Hom}_\mathscr{C}(x, x)$.

<div class="box">

__Definition.__ A _monoid_ is a set $M$ along with a binary operator $\circ$ such that:

- there is an identity $e \in M$ (where $e \circ x = x$ and $x \circ e = x$ for all $x \in M$), and
- $\circ$ is associative ($(x \circ y) \circ z = x \circ (y \circ z)$).

</div>

Conversely, given a monoid $M$, look at the _classifying category_ $BM$ (we will talk about this name later).
It consists of a single object $x$, with $\text{Hom}_\mathscr{C}(x, x) = M$.

Then in a specific way, the theory of monoids is a special case of the theory of categories.

<div class="box">
__Definition.__

1. A morphism $f \in \text{Hom}_\mathscr{C}(x, y)$ is an _isomorphism_/invertible if\
    $\exists g \in \text{Hom}_\mathscr{C}(y, x)$ s.t. $g \circ f = \text{id}_x$ and $f \circ g = \text{id}_y$.
    (draw diagram)
2. A category $\mathscr{C}$ is called a _groupoid_ if all morphisms are invertible.

</div>

__Examples__

- All categories, if we restrict to their isomorphisms, are groupoids.
- Let $X$ be a finite set. $\text{Hom}_\text{Set}(X, X)$ is all maps from $X$ to itself, with composition is function composition
- Let $X$ be a finite dimension vector space over $K$. Then $\text{Hom}_{\text{Vect}_K}(X, X)$ is all $n \times n$ matrices over $K$
- Let $\mathscr{X}$ be a topological space. We can associate the Fundamental/Poncaire Groupoid $\Pi(\mathscr{X})$
    - the objects are points $x \in \mathscr{X}$
    - The morphisms\
    $\text{Hom}_{\Pi(\mathscr{X})}(x, y) = \{ \text{ homotopy classes of paths } \gamma \colon [0, 1] \to \mathscr{X} \text{ s.t. } \gamma(0) = x, \gamma(1) = y \}$
    - compositions: path concatenations of equivalence classes, with the identity being the constant path
    - (draw diagram) this is an interesting example, but the details are not too relevant to our discussion of categories
- Suppose $\mathscr{C}$ has a single object and is a groupoid. Then $G = \text{Hom}_\mathscr{C}(x, x)$ is a group.
For the converse, given a group $G$, we can construct the classifying category $BG$.
- Suppose in the context of the Fundamental Groupoid we fix $x \in \mathscr{X}$, then $\text{Hom}_{\Pi(\mathscr{X})}(x, x) = G = \Pi_1(\mathscr{X}, x)$ is the _fundamental group_

__Exercise.__ (for those well-versed in algebraic topology) Show any group $G$ is $\Pi_1(\mathscr{X}, x)$ for some $\mathscr{X}$ and $x \in \mathscr{X}$.

Mention of Jean-Pierre Serre saying the best homework for a category theory class is to re-prove all the theorems.

# Constructing new categories from old ones

Let's go over some ways to build new categories from ones we already know.

<div class="box">

__Definition.__

1. _Dual/opposite category_, $\mathscr{C}^{op}$. The objects are the same, but all the morphisms are flipped, i.e.:

    $$\text{Hom}_{\mathscr{C}^{op}}(x, y) = \text{Hom}_{\mathscr{C}}(y, x)$$

    Note that $\left(\mathscr{C}^{op}\right)^{op} = \mathscr{C}$.

2. _Full subcategory_ $\mathscr{C}' \subset \mathscr{C}$. This is some subcollection of the objects, with all morphisms between them. (Verify that this is still a category)

3. _Over/under categories_. (draw diagrams). Fix $x \in \mathscr{C}$.

    - Over: Denoted $\quot{\mathscr{C}}{x}$
    
        The objects are $y \stackrel{f}{\to} x$, i.e. $(y, f)$ where $y \in \mathscr{C}, f \in \text{Hom}_\mathscr{C}(y, x)$.\
        Let $y \stackrel{f}{\to} x$ and $z \stackrel{g}{\to} x$. Then if there is $h \in \text{Hom}_\mathscr{C}(y, z)$ so that $g \circ h = f$, then $h$ is a homomorphism in $\quot{\mathscr{C}}{x}$.

        Check that this forms a category, i.e. that composition and identity are preserved.

    - Under: Denoted $\quot{x}{\mathscr{C}}$

    __Exercise:__ Show that $(\quot{x}{\mathscr{C}})^{op} = \quot{\mathscr{C}^{op}}{x}$. 

</div>

# Functors and natural transformations

<div class="box"> __Definition.__ A _functor_ $F \colon \mathscr{C} \to \mathscr{D}$ consists of:

- map of objects $F \colon \mathscr{C} \to \mathscr{D}$
- For each $x, y \in \mathscr{C}$, map of morphisms (draw diagram):

    $$ F \colon \text{Hom}_{\mathscr{C}}(x, y) \to \text{Hom}_\mathscr{D}(Fx, fy)$$

such that $F(f \circ g) = F(f) \circ F(g)$ (in analogy to group homomorphisms) </div>

__Examples__

- "Forgetful" functors, which simply forget whatever structure there may be:
    1. $F \colon \text{Top} \to \text{Set}$ "forgets" topology
    2. $F \colon \text{Grp} \to \text{Set}$ \

- One specific example of many:
    
    $$ F \colon \text{Top}^{op} \to \text{Vect}_\mathbb{R}$$
    $$ x \mapsto \mathscr{C}^0(\mathscr{X}, \mathbb{R}) $$