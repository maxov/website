---
layout: note
title: "Math 202A Lecture 3: Completions"
date: 2018-08-27
class: math202a
author: Max Ovsiankin
lecturer: Marc Rieffel
---

# Review

::: defn
1. Let $(X, d_X)$ be a metric space.
We say that it is _complete_ if every Cauchy sequence converges.
2. By a _completion_ of $(X, d_x)$ we mean a complete metric space $\overline{X}$ together with a specific
isometry $d_x \colon X \to \overline{X}$ whose range is dense in $\overline{X}$.
:::

__Example.__ We already looked at $\mathbb{Q} \hookrightarrow \mathbb{R}$.

__Proposition.__ If $(Y_1, j_{y_1})$ and $(Y_2, j_{y_2})$ are both completions of $(X, d_X)$ then there is an
isometry $\varphi \colon Y_1 \to Y_2$ onto, such that $j_{y_2} = \varphi \circ j_{y_1}$.

The implication of this proposition is that any two completions of a metric space are isomorphic, implying that
completion is unique.

::: defn
$S$ dense in $X$ means that for every $x \in X$, $B(X, \epsilon) \cap S \neq \emptyset$ for all $\epsilon > 0$.
:::

# Completions

To build completions, we will essentially construct a new space out of Cauchy sequences.
Note that if we have two sequences $\{ s_n \}, \{ f_n \} \subset X$ converging to the same point $x \in X$,
then $d_X(s_n, t_n) \to 0$ by the triangle inequality.

In non-complete metric spaces we cannot compare Cauchy sequences based on where they converge, but we can still
use this fact to define a notion of equivalence on them:

::: defn
For any metric space $(Z, d_z)$ and Cauchy sequences $\{ s_n \}, \{ t_n \} \subset Z$,
we say they are _equivalent_ if $d_Z(s_n, t_n) \to 0$ as $n \to \infty$.
:::

You can check that this equivalence satisfies all the properties of an equivalence relation.
Reflexivity and symmetry follow easy, and the triangle inequality gives transitivity.

__Proposition.__ Let $(X, d_x)$ and $(Y, d_y$) be metric spaces, with $(Y, d_y)$ complete.
Let $S$ be a dense subset of $X$ with the metric from $X$.
Let $f \colon S \to Y$ be uniformly continuous.
Then there exists a continuous extension, $\bar{f} \colon X \to Y$ of $f$, where $\bar{f}|_S = f$.
$\bar{f}$ will also be unique and uniformly continuous.\

_Proof._ The full proof is a problem set exercise, so do yourself.
We prove existence and continuity.

For $x \in X$, choose a sequence $\{ s_n \} \subset S$ converging to $x$.
Because $f$ is uniformly continuous, $\{ f(s_n) \}$ is a Cauchy sequence in $Y$.
Since $Y$ is complete, it to a point $p \in Y$, define $\bar{f}(x) = p$.

We must show $\overline{f}$ is well-defined, that its definition does not depend on our choice of sequence
in the previous part.
Formally, we must show that if $\{ t_n \} \subset S$ is another Cauchy sequence converging to $x$, then $\{ f_n \}$ also
converges to $p$.
Since $\{ s_n \}, \{ t_n \}$ both converge to $p$, they are equivalent Cauchy sequences, i.e. $d_S(s_n, t_n) \to 0$.
Since $f$ is uniformly continuous, $d(f(s_n), f(t_n)) \to 0$.
This implies $\{ f(t_n) \} \to p$.

::: thm
Every metric space $(X, d_x)$ has a completion $(\overline{X}, d_{\overline{x}})$.
:::

We will complete the proof in the next lecture.
