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

1. map of objects $F \colon \mathscr{C} \to \mathscr{D}
2. For $x, y \in \mathscr{C}$ a map of morphisms
    $$ F \colon \text{Hom}_\mathscr{C}(x, y) \to \text{Hom}_\mathscr{D}(Fx, Fy)$$

    so that $F(f \circ g) = F(f) \circ F(g)$ and $F(e_x) = e_{Fx}$
:::

__Example.__ Take the following morphism:

$$ F \colon \text{Top}^{op} \to \text{Vect}_\mathbb{R}$$
$$ \mathscr{X} \mapsto C^0(\mathscr{X}, \mathbb{R}) $$

Which maps a topological space to a vector space of continuous functions $\mathscr{X} \to \mathbb{R}$.
On morphisms, this acts as follows:

$$ \underbrace{(\mathscr{X} \stackrel{f}{\to} \mathscr{Y})}_{\in \text{ Hom}_{\text{Top}^{op}}(\mathscr{Y}, \mathscr{X})} 
\mapsto \ \ 
\underbrace{(C^0(\mathscr{X}, \mathbb{R}) \leftarrow C^0(\mathscr{Y}, \mathbb{R}))}_{\in \text{ Hom}_{\text{Vect}_\mathbb{R}}(C^0(\mathscr{Y}, \mathbb{R}), C^0(\mathscr{X}, \mathbb{R}))}$$

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
