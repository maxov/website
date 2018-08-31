---
layout: note
title: "Math 202A Lecture 2: Sequences, Cauchy, Completions"
date: 2018-08-24
class: math202a
author: Max Ovsiankin
lecturer: Marc Rieffel
---

# Administrivia
- The GSI will be Nick Brody. Office hours and office
- Midterm by vote will be Monday, Oct 29
- Course webpage has been updated. Homework is recommended to be written in Latex, submitted on paper
- Shoutout to [arXiv.org](https://arxiv.org) - preprints, a wonderful way to see the current state of a subject

# Seminorm

As an example of a seminorm, let $V$ be a vector space over $\mathbb{R}$, and take $\varphi \in V'$, a linear functional in the dual space.
Define

$$ \| \nu \|_\varphi = p_\varphi(\nu) $$

More than just $0$ can be in the kernel of $\varphi$ (trivially take $\varphi = 0$), so this is a seminorm.

# Sequences

::: defn
Let $X$ be a set. A _sequence_ in $X$ is a function $f \colon \mathbb{N} \to X$. We notate it as
$\{ x_n \}$ or $\{ x_n \}_{n \in \mathbb{N}}$.
:::

::: defn
Let $(X, d)$ be a metric space, and let $\{x_n\} \subset X$. We say that $\{ x_n \}$ _converges_ to $x_n$, written $\{ x_n \} \to x$, if

$$\forall \epsilon > 0 \ \exists N \in \mathbb{N} \text{ s.t. } \forall n \geq N, d(x, x_n) < \epsilon$$
:::

__Proposition.__ Let $(X, d_x), (Y, d_y)$ be metric spaces, and let $f \colon X \to Y$ be continuous.
Let $\{ x_n \} \to x \in X$. Then $\{ f(x_n) \} \to f(x)$.

This proposition also has a converse. If we apply $f$ to all sequences converging at a point $x \in X$ and the
resultant sequences also converge, then $f$ is continuous at that point.

Heading towards completions, let us define some notions in metric spaces.

::: defn
Let $(X, d)$ be a metric space. Let $S \subset X$, we say that $S$ is _dense_ in $X$ if

$$ \forall x \in X \ \forall \epsilon > 0 \ \exists s \in S \text{ with } d(x, s) < \epsilon $$
:::

::: defn
For $x \in X$, the _open ball about $x$ of radius_ $\epsilon > 0$ is

$$B(x, \epsilon) = \{ x' \in X \colon d(x, x') < \epsilon \} $$

:::

__Proposition.__ Let $(X, d_x), (Y, d_y)$ be metric spaces. Let $S \subset X$, with $S$ dense in $X$.
Let $f, g \colon X \to Y$ be continuous. Then if $f|_S = g|_S$, we have $f = g$.\
_Proof._ Omitted.

::: defn
For $(X, d)$ a sequence $\{ x_n \} \subset X$ is a _Cauchy sequence_ if

$$ \forall \epsilon > 0 \ \exists N \in \mathbb{N} \text{ s.t. for } m, n \geq N, d(x_m, x_n) < \epsilon $$
:::

Cauchy sequences are preserved under uniformly continuous maps:

__Proposition.__ Let $(X, d_x), (Y, d_y)$ be metric spaces, and let $f \colon X \to Y$.
If $f$ is uniformly continuous, and if $\{ x_n \}$ is a Cauchy sequence in $X$, then $\{ f(x_n) \}$ is Cauchy in $Y$.\
_Proof._ Let $\epsilon > 0$ be given.
Then there is $\delta > 0$ such that if $x, x' \in X$ with $d_x(x, x') < \delta$ then $d_y(f(x), f(x')) < \epsilon$.
Since $\{ x_n \}$ is Cauchy, there exists an $N$ s.t. if $m, n \geq N$, then $d_x(x_m, x_n) < \delta$.
But then $d_y(f(x_n), f(x_m)) < \epsilon$.

# Toward Completions

In an ideal metric space, we want all Cauchy sequences to converge:

::: defn
Let $X$ be a metric space. If every Cauchy sequence in $X$ converges, then $(X, d)$ is said to be _complete_.
:::

Let $\mathbb{Q}$ be the set of rational numbers.
We can define a metric $d$ on $\mathbb{Q}$ by $d(r, s) = |r - s|$.
We intuitively know that $\mathbb{Q}$ is not complete, as for example $p(t) = t^2 - 2$ has no roots in $\mathbb{Q}$.

However, $\mathbb{R}$ with the same metric is complete, and $\mathbb{Q}$ is dense in $\mathbb{R}$.

Inspired by the relationship by $\mathbb{Q}$ and $\mathbb{R}$, let's define a formal notion of completion
(draw diagram):

::: defn 
Let $(X, d)$ be a metric space. By a _completion_ of $(X, d)$ we mean a complete metric space $(\overline{X}, d)$
with an isometric map $f \colon X \to \overline{X}$ with dense range.
:::

Existence of completions is important, but it turns out we can say something about uniqueness of completions
by constructing isomorphisms:

__Proposition.__ If $(Y_1, d_{y_1}), f_1 \colon X \to Y_1$ and $(Y_2, d_{y_2}), f_2 \colon X \to Y_2$ are completions
of $(X, d)$, then there is a $g \colon Y_1 \to Y_2$ isometric onto with $f_2 = g \circ f_1$.
 