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

Note that we use essential surjectivity as opposed to the natural definition for surjectivity because surjectivity is
too strong.
