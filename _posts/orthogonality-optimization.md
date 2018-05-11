---
layout: post
title:  "Orthogonality in Optimization"
categories: 
---

Optimization problems are extremely common in applications to machine learning, statistics, and many other fields.
Orthogonality is a topic that I noticed comes up almost every time optimization was discussed in classes I have taken,
so I'd like to draw comparisons to see if we can solve many problems under the same framework.

## Optimization problems

Mathematically, optimization problems have a straightforward characterization.
We have some domain of options $D$ (often a subset of $\mathbb{R}^k$) and an objective
function $f \colon D \to \mathbb{R}$. We aim to find the 'optimal' choice of $f$ on $D$.
Here we will focus on finding a minimum, phrased as:

$$ \underset{x \in D}{\text{argmin}} f(x) $$

Technically, if $D$ is not a compact set we need the machinery of $\inf$,
because it is possible to have an objective function with no minimum value!
However, I don't think this detail is important for the rest of this post, so I will ignore it.

We will examine a few common kinds of optimization problems under this framework:

1. __Regression:__

    We have data $(X_1, Y_1), \ldots, (X_n, Y_n) \in \mathbb{R}^2$ and wish to find a 'line of best fit'.

2. __Estimation:__

    We have non-independent random variables $X, Y$ and wish to find some linear (or maybe more complicated) estimate of $Y$ given $X$, $L[Y|X]$.

3. __Projection:__

    We have a subspace $W \subset \mathbb{R}^k$, along with a vector $\mathbf{v} \in \mathbb{R}^k$, and wish to find a vector $\mathbf{w} \in W$ that is as close as possible to $\mathbf{v}$.

It is probably no secret at this point in history that all of these problems turn out to just be instances of the third one.
This is especially nice because we actually have a closed-form solution of projection.
But why is this, and what kinds of conditions do we need on our optimization problem to reduce it to an instance of __projection__?

## Solving projection

Let's first review how we solve the __projection__ problem.
Formally, we have a vector space $\mathbb{R}^k$, a subspace $W \subset \mathbb{R}^k$, and a vector $\mathbf{v} \in \mathbb{R}^k$.
We wish to find the 'best approximation' of $\mathbf{v}$ in $W$, or:

$$ \underset{\mathbf{w} \in W}{\text{argmin}} \| \mathbf{v} - \mathbf{w} \|^2 $$

It may seem like an unimportant detail, but by even phrasing the problem this way we have added an additional assumption onto our vector space
$\mathbb{R}^k$: that it supports taking norms of vectors $\| \mathbf{v} \|$.
Of course this is alright because in $\mathbb{R}^k$ we have a canonical definition of such a norm,
but we should explore this fact so we can make sense of it in more exotic vector spaces.

$\mathbb{R}^k$ has not just a norm $\| \|$, but an inner product $\langle, \rangle$ that fully expresses its geometry and is used to define the norm:

$$ \| \mathbf{v} \|^2 = \langle \mathbf{v}, \mathbf{v} \rangle $$

With the inner product, we now have enough structure to find our optimal point.
An optimal point $\mathbf{w_0}$ will have the property that for all $\mathbf{w} \in W$,
$\| \mathbf{v} - \mathbf{w_0} \|^2 \leq \| \mathbf{v} - \mathbf{w} \|^2$ (this defines its optimality with respect to our optimization problem).

To find a point that has this property, we first recall a famous theorem from geometry:

__Theorem__ (_Pythagorean theorem_).
Let $\mathbf{u}, \mathbf{v} \in \mathbb{R}^k$ such that $\mathbf{u}$ and $\mathbf{v}$ are orthogonal. Then

$$\|\mathbf{u}+\mathbf{v}\|^2 = \| \mathbf{u} \|^2 + \|\mathbf{v} \|^2$$

_Proof._  We proceed by applying the definition of norm and orthogonality:

$$ \begin{aligned}
  \|\mathbf{u}+\mathbf{v}\|^2 &= \langle \mathbf{u} + \mathbf{v}, \mathbf{u} + \mathbf{v} \rangle \\
  &= \langle \mathbf{u}, \mathbf{u} \rangle + 2 \langle \mathbf{u}, \mathbf{v} \rangle + \langle \mathbf{v}, \mathbf{v} \rangle \\
  &=  \langle \mathbf{u}, \mathbf{u} \rangle + \langle \mathbf{v}, \mathbf{v} \rangle \\
  &= \| \mathbf{u} \|^2 + \| \mathbf{v} \|^2
\end{aligned}
$$

<div class="pull-right">
$\square$
</div>

It always interested me that the Pythagorean theorem makes an appearance here.
I suppose it's a testament to how far geometric intuition can take you, to proving results that generalize far beyond the Euclidean plane!