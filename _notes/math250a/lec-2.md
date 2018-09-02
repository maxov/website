---
layout: note
title: "Math 250A Lecture 2: Functors, Natural Transformations, Yoneda"
date: 2018-08-28
class: math250a
author: Max Ovsiankin
lecturer: David Nadler
---

# Administrivia

- Nadler will eventually have fixed office hours 
- Midterm and final still not set

There's way too much to teach for this class.
Nadler would much rather do it honestly and humanly.
The goal is to teach stuff that is interesting and useful.

# Functors

Recall:

::: defn
A _functor_ $F \colon \mathscr{C} \to \mathscr{D}$ consists of:

1. map of objects $F \colon \mathscr{C} \to \mathscr{D}$
2. For $x, y \in \mathscr{C}$ a map of morphisms
    $$ F \colon \text{Hom}_\mathscr{C}(x, y) \to \text{Hom}_\mathscr{D}(Fx, Fy)$$

    so that $F(f \circ g) = F(f) \circ F(g)$ and $F(e_x) = e_{Fx}$
:::

__Example.__ Take the following functor:

$$ F \colon \text{Top}^{op} \to \text{Vect}_\mathbb{R}$$
$$ X \mapsto C^0(X, \mathbb{R}) $$

Which maps a topological space to a vector space of continuous functions $X \to \mathbb{R}$.
On morphisms, this acts as follows:

$$ \underbrace{(X \stackrel{f}{\to} Y)}_{\in \text{ Hom}_{\text{Top}^{op}}(Y, X)} 
\longmapsto \ \ 
\underbrace{(C^0(X, \mathbb{R}) \stackrel{\circ f}{\leftarrow} C^0(Y, \mathbb{R}))}_{\in \text{ Hom}_{\text{Vect}_\mathbb{R}}(C^0(Y, \mathbb{R}), C^0(X, \mathbb{R}))}$$

The morphism $f$ is mapped to $\circ f$, representing the map precomposing $f$ with the functions in $C^0(Y, \mathbb{R})$
to make functions in $C^0(X, \mathbb{R})$.

# Natural Transformations

What we're about to do next is apply category theory to itself.
Morally, take $\text{Cat} =$ the category of categories.
Morally here because we insisted $\text{Hom}$s are sets, so this is not quite rigorous.
Then the morphisms between categories are functors.

But now let's consider $F, G \colon \mathscr{C} \to \mathscr{D}$, both in $\text{Hom}_{\text{Cat}}(\mathscr{C}, \mathscr{D})$.
Could there be some shared structure between the functors?
As it turns out, yes, and we can formalize it using a "morphism of functors":

::: defn
A _natural transformation_ $\varphi \colon F \to G$ for $F, G \colon \mathscr{C} \to \mathscr{D}$ maps each
$x \in \mathscr{C}$ to a morphism $Fx \stackrel{\varphi x}{\to} Gx$ in $\mathscr{D}$.
i.e. $\varphi x \in \text{Hom}_\mathscr{D}(Fx,Gx)$ so that for $f \in \text{Hom}_\mathscr{C}(x, y)$, the diagram:

commutes.
The diagram says that $G(f) \circ \varphi_x = \varphi_y \circ F(f)$.
:::

__Example.__

Let $F \colon \text{Top}^{op} \to \text{Vect}_\mathbb{R}$ with $X \mapsto C^0(X, \mathbb{R})$ as in the previous example. 
Let $G \colon \text{Top}^{op} \to \text{Vect}_\mathbb{R}$ with $X \mapsto C^{l.c.}(X, \mathbb{R})$,
where $C^{l.c.}(X, \mathbb{R})$ denotes the vector space of locally constant functions $X \to \mathbb{R}$
(locally constant means for all points, the function is constant on some open neighborhood around the point).

As a natural transformation, consider $\varphi \colon G \to F$. 
If $X$ is a space, then we must have that
$$\varphi_X \in \text{Hom}_{\text{Vect}_\mathbb{R}}(G(X), F(X)) = \text{Hom}_{\text{Vect}_\mathbb{R}}(C^{l.c.}(X, \mathbb{R}), C^0(X, \mathbb{R}))$$

As all locally constant functions are automatically continuous, we can make $\varphi_X$ the inclusion map:

$$ \varphi_X = C^{l.c.}(X, \mathbb{R}) \hookrightarrow C^0(X, \mathbb{R}) $$

You can check that this map satisfies the definition of natural transformation.

The alternate name for a natural transformation, as a "morphism of functors", suggests it is a morphism in the category of functors, which we define formally:

::: defn
Let $\mathscr{C}, \mathscr{D}$ be categories.
Then the  _category of functors_ $\text{Fun}(\mathscr{C}, \mathscr{D}) = \text{ functors from } \mathscr{C} \to \mathscr{D}$.

The objects are functors $F \colon \mathscr{C} \to \mathscr{D}$.
The morphisms are natural transformations $\varphi \colon F \to G$ for $F, G \colon \mathscr{C} \to \mathscr{D}$.
Composition is defined as $(\psi \circ \varphi)_x = \psi_x \circ \varphi_x$.
:::

You can check this fits the requirements of a category.

Let us now talk about some terminology about functors:

::: defn
Let $F \colon \mathscr{C} \to \mathscr{D}$.

1. $F$ is _full_ if it is surjective on Homs, i.e. for $x, y \in \mathscr{C}$, $\text{Hom}_\mathscr{C}(x, y) \twoheadrightarrow \text{Hom}_\mathscr{D}(Fx, Fy)$.
2. $F$ is _faithful_ if it is injective on Homs, i.e. for $x, y \in \mathscr{C}$, $\text{Hom}_\mathscr{C}(x, y) \hookrightarrow \text{Hom}_\mathscr{D}(Fx, Fy)$.
3. (diagram) F is _essentially surjective_ if every $y \in \mathscr{D}$ is isomorphic to $Fx \in \mathscr{D}$ for some
$x \in \mathscr{C}$.
4. F is an _equivalence_ if there exists a "pseudo-inverse" $G \colon \mathscr{D} \to \mathscr{C}$ such that
$G \circ F \stackrel{\simeq}{_\text{isom}} \text{id}_\mathscr{C}$ and  $F \circ G \stackrel{\simeq}{_\text{isom}} \text{id}_\mathscr{D}$.
:::

Note that we use essential surjectivity as opposed to the natural definition for surjectivity because surjectivity by itself is too strong.

__Warning:__ Equivalence is not the same as asking two categories to be isomorphic.
That would imply the existence of functors in opposite directions $F, G$ such that $G \circ F = \text{id}_\mathscr{C}$
and $F \circ G = \text{id}_\mathscr{D}$.
Here we use strict equality instead of isomorphisms of functors, which turns out to be far too strong and restrictive.

It is very useful to construct equivalences, which we can do easier due to the following lemma:

__Lemma.__ Let $F \colon \mathscr{C} \to \mathscr{D}$ be a functor.
Then $F$ is an equivalence if and only if it is fully faithful and essentially surjective.

Proving (equivalence $\implies$ fully faithful and essentially surjective) is an exercise, while the other direction involves some set theory.

__Example.__ Let $\mathscr{D} = \text{Finset}$. Let $\mathscr{C} = \{ [-1], [0], [1], \ldots \}$, with
$\text{Hom}_\mathscr{C}([m], [n])$ as all set maps $<0, 1, \ldots, m> \ \to \ <0, 1, \ldots, n>$ and compositions as
compositions of set maps.

Now let $F \colon \mathscr{C} \to \mathscr{D}$.
It maps objects $[m] \mapsto <0, 1, \ldots, m>$, and on morphisms $f \mapsto f$.
$F$ is an equivalence.

__Example.__ Categories can really be anything.
As a toy example, consider our "funny cat" $\mathscr{C}$: (diagram)

This is a valid category!
It just doesn't mean much when we think about typical mathematical objects we study.

__Warning:__ Functors are _not_ determined by what they do to objects.

Consider two categories $\mathscr{C}$ and $\mathscr{D}$ (diagram):

We can construct the functors $F(f) = g$ or $F'(f) = h$, which do the expected thing on objects but differ on morphisms.

We also attempted to construct a more complicated example, but the way it failed is informative.

Let $F \colon \text{Vect}_K \to \text{Vect}_K$ be $\text{id}_{\text{Vect}_k}$.
Define $F' \colon \text{Vect}_k \to \text{Vect}_k$ that maps:

$$ \text{objects:}\quad v \mapsto v$$
$$ \text{morphisms:}\quad \text{Hom}_{\text{Vect}_K}(V, W) \to \text{Hom}_{\text{Vect}_k}(V, W)$$
$$ (f \colon V \stackrel{_\text{linear}}{\to} W) \longmapsto \begin{cases}
f \colon V \to W & \text{if $f$ iso} \\
0 \colon V \to W & \text{else} 
\end{cases}$$

Note that $F'$ _fails_ as a functor!! Take for example the chain of inclusion followed by projection:

$$K \stackrel{i_1}{\to} K \otimes K \stackrel{p_1}{\to} K$$

Under $F'$ this becomes:

$$K \stackrel{0}{\to} K \otimes K \stackrel{o}{\to} K$$

We must have that $F'(i_1 \circ p_1) = F'(i_1) \circ F'(p_1)$
but we have: $$\text{id}_K = F'(i_1 \circ p_1) \neq F'(i_1) \circ F'(p_1) = 0 \circ 0 = 0$$

# Yoneda

Now let us talk about an important lemma that has a wide application, the Yoneda lemma.
We will not discuss the proof, but proving it is a good exercise in definition-chasing.

An aside: Pierre Deligne from Belgium was made a viscount for his contributions to mathematics,
and on his coat of arms he has a poem that mentions mathematics as tautologies following tautologies
following tautologies.

In the following, we define the functor $\text{Hom}_\mathscr{C}(-, x) \colon \mathscr{C}^{op} \to \text{Set}$ as the map:

$$ w \longmapsto \text{Hom}_\mathscr{C}(w, x) $$

To check that $\text{Hom}_\mathscr{C}(-, x) \in \text{Fun}(\mathscr{C}^{op}, \text{Set})$, it acts on morphisms as:

$$(y \stackrel{f}{\to} z) \ \ \longmapsto \ \ \left(\text{Hom}_\mathscr{C}(y, x) \stackrel{\circ f}{\leftarrow} \text{Hom}_\mathscr{C}(z, x) \right)$$


::: box 
__Lemma__\
_(Yoneda)_

For every category $\mathscr{C}$, there exists a functor called the _Yoneda functor_
$Y \colon \mathscr{C} \to \text{Fun}(\mathscr{C}^{op}, \text{Set})$ which acts on $x \in \mathscr{C}$ as:

$$ x \longmapsto \text{Hom}_\mathscr{C}(-, x) $$

On morphisms, we have:

$$Y \colon\qquad x \stackrel{f}{\to} x' \ \ \longmapsto \ \ \left(\text{Hom}_\mathscr{C}(-, x) \stackrel{f \circ}{\longrightarrow} \text{Hom}_\mathscr{C}(-, x')\right)$$

Then $Y$ is fully faithful.
:::

__Warning:__ In general, $Y$ is not essentially surjective.

::: defn
Functors $F \colon \mathscr{C}^{op} \to \text{Set}$ of the form $Y(x) \in \text{Hom}_\mathscr{C}(-, x)$ are called _representable_.
:::

Representable functors have a connection with representation theory, which we will talk about later in this class.

__Example/Exercise.__ Let $\mathscr{C} = BG$ for $G$ a group.
Calculate $\text{Fun}(\mathscr{C}^{op}, \text{Set})$ and the image of $Y \colon \mathscr{C} \to \text{Fun}(\mathscr{C}^{op}, \text{Set})$.
